import Comment from "./Comment";

class Room {
  constructor({ id, name, comments }) {
    this.id = id;
    this.name = name;
    this.comments = comments.map((comment) => new Comment(comment));
  }
}

export default Room;
