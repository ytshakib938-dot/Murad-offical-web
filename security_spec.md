# Security Specification & Threat Model (TDD)

## 1. Data Invariants
- An order ID must be non-empty, strictly match the schema format (alphanumeric with hyphens/letters, `M-GRID-[0-9]{6}`), and have size bounded limits.
- The `status` field is restricted to `Pending`, `Paid`, or `Delivered`.
- A completed/delivered order cannot have its status downgraded or altered again by non-admin clients.
- Immutability of critical core identifiers post-creation (e.g. `id`, `paymentAmount`, `createdAt`).
- All orders created or edited by guest users must execute proper static payload validation checks.
- Timestamps must correspond to the actual server execution time (`request.time`).

---

## 2. The "Dirty Dozen" Malicious Payloads
The following payloads must be systematically rejected by the security rules:

1. **Payload 1: Large ID Character Injection**
   - Attempting to pass a 1.2MB garbage-character string as the document ID path to cause buffer/wallet strain.
2. **Payload 2: Negative/Floating Point Currency Injection**
   - Setting a negative `paymentAmount` (e.g., `-100.25`) to abuse checkout values.
3. **Payload 3: Status Shortcutting / Downgrading**
   - Updating a terminal `Delivered` status back to `Paid` or `Pending`.
4. **Payload 4: Shadow Field Addition (The Ghost Field)**
   - Injecting an unauthorized key `isAdminPrivilege: true` to bypass administrative validation barriers.
5. **Payload 5: Client-Spoofed Timestamps**
   - Creating a document with a forced, stale, or future `createdAt` value (e.g., `1999-01-01T00:00:00Z`).
6. **Payload 6: Email Format Manipulation**
   - Submitting an order record with an invalid email schema (e.g., `not_an_email_address_at_all`).
7. **Payload 7: Large String Denial of Wallet**
   - Submitting a string with size exceeding 10,000 characters inside the `customerName` or `purchasedProducts` property.
8. **Payload 8: Missing Required Parameter**
   - Attempting a create transaction with the `paymentAmount` field missing.
9. **Payload 9: Invalid Status Enum Transition**
   - Transitioning an order status to an unregistered enum string (e.g. `Refunded` or `Free`).
10. **Payload 10: Unauthorized Delete Command**
    - Anonymous target client trying to query or issue a delete on an active customer order document node.
11. **Payload 11: Immutable Field Revision**
    - Trying to adjust the `paymentAmount` or `id` parameters under an existing active order on an update.
12. **Payload 12: Invalid Payment Method Selection**
    - Submitting a transaction with an unsupported payment provider (e.g., `ApplePay` or `WeChat`).

---

## 3. Test Runner Design (`firestore.rules.test.ts`)
Clients should implement automated unit tests conforming to `@firebase/rules-unit-testing` standard to verify that each of the Dirty Dozen payloads returns `PERMISSION_DENIED` during operations.
