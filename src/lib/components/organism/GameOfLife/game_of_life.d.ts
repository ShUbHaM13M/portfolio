/* tslint:disable */
/* eslint-disable */

export class Grid {
  free(): void;
  [Symbol.dispose](): void;
  constructor(width: number, height: number, resolution: number);
  get_width(): number;
  get_height(): number;
  get_cells_ptr(): number;
  get_cells_len(): number;
  update(): void;
  update_cell_state(x: number, y: number, state: number): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_grid_free: (a: number, b: number) => void;
  readonly grid_new: (a: number, b: number, c: number) => number;
  readonly grid_get_width: (a: number) => number;
  readonly grid_get_height: (a: number) => number;
  readonly grid_get_cells_ptr: (a: number) => number;
  readonly grid_get_cells_len: (a: number) => number;
  readonly grid_update: (a: number) => void;
  readonly grid_update_cell_state: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
