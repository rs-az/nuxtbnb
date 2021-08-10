export default interface Reviews {
    objectID: String,
    homeId: String,
    reviewer: Reviewer,
    rating: Number,
    date: String,
    comment: String
}

interface Reviewer {
    image: String,
    name:  String
}