import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:'Bearer 8ZmS0K_9W0LdE3BjCFc2UCYn5bU0YyZofFdxuWW7cSk0bqS8iyIk2SV1oMLa9ir11psPZlTncMwtJ09QgRX2zvWVxZHxXUBnHbcNZ26KFSotlYIWB9p6fdqEd_5cW3Yx'
    }
});