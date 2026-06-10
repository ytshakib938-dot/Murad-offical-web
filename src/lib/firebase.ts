import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, Timestamp, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Define standard types for our application orders
export interface OrderItem {
  id: string;
  customerName: string;
  customerEmail: string;
  purchasedProducts: string; // Serialized string or summary of items
  paymentAmount: number;
  status: 'Pending' | 'Paid' | 'Delivered';
  paymentMethod: 'Stripe' | 'PayPal';
  createdAt: string;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  }
}

// Hardened error handler as per firebase-integration skill
function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: 'guest_user',
      email: null
    },
    operationType,
    path
  };
  console.error('Firestore Error info:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

let db: any = null;
let isRealFirebase = false;

// Avoid crashing if config is placeholder or blank
if (firebaseConfig && firebaseConfig.apiKey && firebaseConfig.apiKey !== 'PLACEHOLDER') {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    // CRITICAL: Initialize Firestore with the specific custom database ID from firebase-applet-config.json
    db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
    isRealFirebase = true;
    console.log('Firebase Firestore successfully initialized with database:', firebaseConfig.firestoreDatabaseId);

    // CRITICAL CONSTRAINT: Test Firestore connection upon initialization
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
        console.log('Firestore connection verified successfully.');
      } catch (error) {
        if (error instanceof Error && error.message.includes('offline')) {
          console.error("Please check your Firebase configuration. Client appears to be offline.");
        } else {
          console.log('Firestore connection baseline test complete (ignoring permission denied on test doc).');
        }
      }
    };
    testConnection();
  } catch (err) {
    console.warn('Firebase failed to initialize with provided config, falling back to local storage fallback.', err);
  }
} else {
  console.log('Firebase config is placeholder or missing. Using robust Local Storage client database.');
}

// Save order helper
export async function saveOrder(order: OrderItem): Promise<void> {
  const path = `orders/${order.id}`;
  if (isRealFirebase && db) {
    try {
      await setDoc(doc(db, 'orders', order.id), {
        id: order.id,
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        purchasedProducts: order.purchasedProducts,
        paymentAmount: Number(order.paymentAmount),
        status: order.status,
        paymentMethod: order.paymentMethod,
        createdAt: Timestamp.now()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  } else {
    // Local storage fallback
    try {
      const existingOrdersStr = localStorage.getItem('murad_orders') || '[]';
      const existingOrders: OrderItem[] = JSON.parse(existingOrdersStr);
      // Remove duplicates if any
      const filtered = existingOrders.filter(o => o.id !== order.id);
      filtered.push(order);
      localStorage.setItem('murad_orders', JSON.stringify(filtered));
    } catch (err) {
      console.error('Failed to save order to local storage fallback:', err);
    }
  }
}

// Fetch order helper
export async function getOrder(orderId: string): Promise<OrderItem | null> {
  const path = `orders/${orderId}`;
  if (isRealFirebase && db) {
    try {
      const docSnap = await getDoc(doc(db, 'orders', orderId));
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: data.id,
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          purchasedProducts: data.purchasedProducts,
          paymentAmount: data.paymentAmount,
          status: data.status,
          paymentMethod: data.paymentMethod,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString()
        };
      }
      return null;
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
    }
  } else {
    // Local storage fallback
    try {
      const existingOrdersStr = localStorage.getItem('murad_orders') || '[]';
      const existingOrders: OrderItem[] = JSON.parse(existingOrdersStr);
      const matched = existingOrders.find(o => o.id === orderId);
      return matched || null;
    } catch (err) {
      console.error('Failed to get order from local storage fallback:', err);
      return null;
    }
  }
}

// List all orders (useful helper for tracking list if required)
export async function getAllOrders(): Promise<OrderItem[]> {
  try {
    const existingOrdersStr = localStorage.getItem('murad_orders') || '[]';
    return JSON.parse(existingOrdersStr);
  } catch (err) {
    return [];
  }
}
