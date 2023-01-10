import { IUsers } from './Users'

export interface IVideo {
  id: string
  likes: string
  comments: string
  shared: string
  descriptionVideo?: string
  music?: string
  videoURL: string
  user: IUsers
}