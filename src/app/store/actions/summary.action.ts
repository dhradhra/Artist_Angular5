import { Action } from '@ngrx/store';

export const ANALYZE_CONTENT = '[Analyze] Analyze Content';
export const ANALYZE_CONTENT_SUCCESS = '[Analyze] Analyze Content Success';
export const ANALYZE_CONTENT_ERROR = '[Analyze] Analyze Content Error';

export const SELECT_IMAGE = '[Summary] Select Image';

export const STYLIZE_IMAGE = '[Summary] Stylize Image';
export const STYLIZE_IMAGE_SUCCESS = '[Summary] Stylize Image Success';
export const STYLIZE_IMAGE_ERROR = '[Summary] Stylize Image Error';

export const ACTIVE_CONTENT_INDEX = '[Summary] Active Content Index';

export const ADD_TAG = '[Summary] Add Tag';
export const ADD_TAG_SUCCESS = '[Summary] Add Tag Success';
export const ADD_TAG_ERROR = '[Summary] Add Tag Error';

export const REMOVE_TAG = '[Summary] Remove Tag';
export const REMOVE_ALL_TAG = '[Summary] Remove All Tag';

export const CLEAR_STYLE = '[Summary] Clear Style';

export class AnalyzeContent implements Action {
  readonly type = ANALYZE_CONTENT;

  constructor(public payload: any) {}
}

export class AnalyzeContentSuccess implements Action {
  readonly type = ANALYZE_CONTENT_SUCCESS;

  constructor(public payload: any) {}
}

export class AnalyzeContentError implements Action {
  readonly type = ANALYZE_CONTENT_ERROR;

  constructor(public payload: any) {}
}

export class SelectImage implements Action {
  readonly type = SELECT_IMAGE;

  constructor(public payload: any) {}
}

export class StylizeImage implements Action {
  readonly type = STYLIZE_IMAGE;

  constructor(public payload: any) {}
}

export class StylizeImageSuccess implements Action {
  readonly type = STYLIZE_IMAGE_SUCCESS;

  constructor(public payload: any) {}
}

export class StylizeImageError implements Action {
  readonly type = STYLIZE_IMAGE_ERROR;

  constructor(public payload: any) {}
}

export class ActiveContentIndex implements Action {
  readonly type = ACTIVE_CONTENT_INDEX;

  constructor(public payload: any) {}
}

export class AddTag implements Action {
  readonly type = ADD_TAG;

  constructor(public payload: any) {}
}

export class AddTagSuccess implements Action {
  readonly type = ADD_TAG_SUCCESS;

  constructor(public payload: any) {}
}

export class AddTagError implements Action {
  readonly type = ADD_TAG_ERROR;

  constructor(public payload: any) {}
}

export class RemoveTag implements Action {
  readonly type = REMOVE_TAG;

  constructor(public payload: any) {}
}

export class RemoveAllTag implements Action {
  readonly type = REMOVE_ALL_TAG;

  constructor(public payload: any) {}
}

export class ClearStyle implements Action {
  readonly type = CLEAR_STYLE;
}

export type Actions =
  | ActiveContentIndex
  | AddTag
  | AddTagSuccess
  | AddTagError
  | AnalyzeContent
  | AnalyzeContentSuccess
  | AnalyzeContentError
  | ClearStyle
  | RemoveTag
  | SelectImage
  | StylizeImage
  | StylizeImageSuccess
  | StylizeImageError
  | RemoveAllTag;
