import app from "./app";
import { PORT } from "./config";

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});


