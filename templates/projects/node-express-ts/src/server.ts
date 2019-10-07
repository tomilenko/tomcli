import app from './app';
import errorHandler from "errorhandler";

app.use(errorHandler());

const server = app.listen(app.get("port"), () => {
    console.warn(
        "App running on port %d in %s mode",
        app.get("port"),
        app.get("env")
    )
});

export default server;