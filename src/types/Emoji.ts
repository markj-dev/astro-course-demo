export enum Emoji {
  thumbsup = "thumbsup",
  star = "star",
  heart = "heart",
  rocket = "rocket",
}

export interface ReactionsDetail {
  count: number
  reacted: boolean
}

export interface ReactionsDetails {
  [Emoji.thumbsup]: ReactionsDetail
  [Emoji.star]: ReactionsDetail
  [Emoji.heart]: ReactionsDetail
  [Emoji.rocket]: ReactionsDetail
}

export const emojiList = Object.values(Emoji)
