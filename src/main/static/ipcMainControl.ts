export enum ipcMainControl {
  TODO_GET = 1,
  TODO_ADD = 2,
  TODO_UPDATE = 3,
  TODO_SHIFT = 4,
  TODO_DELETE = 5,
  TODO_GROUP_ADD = 11,
  TODO_GROUP_SHIFT = 12,
  TODO_GROUP_DELETE = 13,
  TODO_GROUP_UPDATE_TITLE = 14,
  TODO_GROUP_TODO_ADD = 15,
  TODO_GROUP_TODO_SHIFT = 16,
  TODO_GROUP_TODO_UPDATE = 17,
  TODO_GROUP_TODO_DELETE = 18,
  NOTE_GET_LIST = 21,
  NOTE_ADD = 22,
  NOTE_GET = 23,
  NOTE_UPDATE_TITLE = 24,
  NOTE_UPDATE_CONTENT = 25,
  NOTE_UPDATE_COLOR = 26,
  NOTE_SHIFT = 27,
  NOTE_DELETE = 28,
  GET_THEME = 30,
  SAVE_THEME = 31,
}

export default ipcMainControl;