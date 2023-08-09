export type WithId = {
  id: number;
};

export type TaskNoId = {
  title: string;
  owner: string;
  isCompleted: boolean;
};

export type Task = WithId & TaskNoId;

export interface TaskNoIdI {
  title: string;
  owner: string;
  isCompleted: boolean;
}

export interface TaskI extends TaskNoIdI {
  id: number;
}
