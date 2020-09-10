/**
 * éå½ç±»å
 *
 * @example <caption>éå½ç±»åç¤ºä¾ç¨æ³ - ä¸æ¹åå¼ç±»å</caption>
 * type X<T> = Recursive<T>
 *
 * @example <caption>éå½ç±»åç¤ºä¾ç¨æ³ - æ¹åå¼ç±»å</caption>
 * type Y<T> = Recursive<T, number>;
 */
type Recursive<T, V = any> = {
  [U in keyof T]: T[U] extends object
    ? Recursive<T[U], V>
    : V extends undefined
    ? T[U]
    : V
};

/**
 * ç§»é¤åªè¯»å±æ§
 */
type Mutable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * æ¹åå¼ä¸º Promise
 */
type Deferred<T> = { [P in keyof T]: Promise<T[P]> };

/**
 * æ·»å ä»£ç
 */
type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = { [P in keyof T]: Proxy<T[P]> };

// Partial      - è½¬æ¢å¯é
// Nullable     - è½¬æ¢ä¸ºå¯ null
// Required     - è½¬æ¢ä¸ºå¿é
// Readonly     - è½¬æ¢ä¸ºåªè¯»
// Pick         - åé¨å
// Exclude      - æé¤
// Extract      - æå
// NonNullable  - énull
// ReturnType   - å½æ°è¿åå¼
// InstanceType - è·åæé å½æ°ç±»åçå®ä¾ç±»åã
// Omit
// Record
