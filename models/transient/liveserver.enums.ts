export enum EC2ServerMessage {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  AUTH_REQUEST = 'C2S_AUTH_REQUEST',
  CHAT_MSG = 'C2S_CHAT_MSG',
  CHAT_JOIN_ROOM = 'C2S_CHAT_JOIN_ROOM',
  CHAT_LEAVE_ROOM = 'C2S_CHAT_LEAVE_ROOM',
  PARTY_CREATE = 'C2S_PARTY_CREATE',
  PARTY_READY = 'C2S_PARTY_READY',
  PARTY_UPDATE_STATE = 'C2S_PARTY_UPDATE_STATE',
  PARTY_LEAVE = 'C2S_PARTY_LEAVE',
}

export enum ES2ClientMessage {
  AUTH_ACCEPTED = 'S2C_AUTH_ACCEPTED',
  CHAT_MSG = 'S2C_CHAT_MSG',
  CHAT_JOINED_ROOM = 'S2C_CHAT_JOINED_ROOM',
  CHAT_LEFT_ROOM = 'S2C_CHAT_LEFT_ROOM',
  CHAT_USERLIST = 'S2C_CHAT_USERLIST',
  PARTY_CREATED = 'S2C_PARTY_CREATED',
  PARTY_UPDATED = 'S2C_PARTY_UPDATED',
  PARTY_STARTED_MATCHMAKING = 'S2C_PARTY_STARTED_MATCHMAKING',
  MATCH_PREPARING = 'S2C_MATCH_PREPARING',
  MATCH_READY = 'S2C_MATCH_READY'
}

export enum EG2ServerMessage {
  REGISTER = 'G2S_REGISTER',
  MATCH_CREATED = 'G2S_MATCH_CREATED',
}

export enum ES2GamehostMessage {
  REGISTRED = 'S2G_REGISTRED',
  MATCH_CREATE = 'S2G_MATCH_CREATE',
}