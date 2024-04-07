const INIT_DATA = [
  {
    id: 1,
    user1: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 2,
      username: "Random 2",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: true,
    was_canceled: false,
    was_refused: false
  },
  {
    id: 2,
    user1: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 3,
      username: "Random 3",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: true,
    was_canceled: false,
    was_refused: false
  },
  {
    id: 3,
    user1: {
      id: 4,
      username: "Random 4",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: true,
    was_canceled: false,
    was_refused: false
  },
  {
    id: 4,
    user1: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 5,
      username: "Random 5",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: false,
    was_canceled: true,
    was_refused: false
  },
  {
    id: 5,
    user1: {
      id: 6,
      username: "Random 6",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: false,
    was_canceled: true,
    was_refused: false
  },
  {
    id: 6,
    user1: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 7,
      username: "Random 7",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: false,
    was_canceled: false,
    was_refused: true
  },
  {
    id: 7,
    user1: {
      id: 8,
      username: "Random 8",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: false,
    was_canceled: false,
    was_refused: true
  },
  {
    id: 8,
    user1: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 9,
      username: "Random 9",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: false,
    was_canceled: false,
    was_refused: false
  },
  {
    id: 9,
    user1: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 10,
      username: "Random 10",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: false,
    was_canceled: false,
    was_refused: false
  },
  {
    id: 10,
    user1: {
      id: 11,
      username: "Random 11",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    user2: {
      id: 1,
      username: "Random 1",
      avatar: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
    },
    was_accepted: false,
    was_canceled: false,
    was_refused: false
  },
];

export default class Friends {
  constructor() {}

  static #data = INIT_DATA;

  static async create(invited_user_id) {
    alert(`create: ${invited_user_id}`);
  }

  static async cancel(friend_request_id) {
    alert(`cancel: ${friend_request_id}`);
  }

  static async accept(friend_request_id) {
    alert(`accept: ${friend_request_id}`);
  }

  static async refuse(friend_request_id) {
    alert(`refuse: ${friend_request_id}`);
  }

  static async getAll() {
    return Friends.#data;
  }
}
