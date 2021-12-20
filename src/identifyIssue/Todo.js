import ICONS from "./icons";
import OP8 from "../images/OP8.png";

import { Box } from "@mui/system";

const Todo = {
  Identity: [
    <Box sx={{ display: "column", flexDirection: "column" }}>
      <div style={{ backgroundColor: "#f1f1f1", fontWeight: 300 }}>
        <i>
          After installing 1Password for Safari, it should automatically
          integrate with the desktop app and unlock. If you experience 1Password
          getting stuck at loading screen for too long, you can try these steps.
        </i>
      </div>

      <p>
        <b>1.</b> Make sure that you have the latest version of 1Password 8 from
        here: https://1password.com/downloads.
      </p>

      <p>
        <b>2.</b> Open the 1Password desktop app {`>`} Select the three dots
        icon {ICONS.threedots} at the top left corner {`>`} Settings {`>`}{" "}
        Browser and check if you see the error message as in the screenshot.
      </p>
    </Box>,
    <img style={{ borderRadius: "10%" }} src={OP8} width={"100%"} />,
  ],
  Solution: [
    <div>
      <b>1.</b> Always ensure that 1Password 8 is placed in the main
      Applications folder. If you are not sure, Open{" "}
      <i>
        <code
          style={{
            color: "red",
            backgroundColor: "#f1f1f1",
          }}
        >
          Terminal
        </code>
      </i>{" "}
      and run this command line.{" "}
      <p>
        <code
          style={{
            color: "red",
            backgroundColor: "#f1f1f1",
          }}
        >
          /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister
          -dump| grep '.*path.*1Password Browser Helper'
        </code>
      </p>
    </div>,

    <div>
      <b>2.</b> It should provide the path of the 1Password Helper in
      /Application folder like this.
      <p>
        <code
          style={{
            color: "red",
            backgroundColor: "#f1f1f1",
          }}
        >
          path:
          /Applications/1Password.app/Contents/Library/LoginItems/1Password
          Browser Helper.app (0x940)
        </code>
      </p>
    </div>,

    <div>
      <b>3.</b> If the path of <code>1Password Browser Helper.app</code> is not
      in <code> Applications</code> folder, run this line in
      <code> Terminial</code> to rebuild the Launch Services database:
      <p>
        <code
          style={{
            color: "red",
            backgroundColor: "#f1f1f1",
          }}
        >
          /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister
          -kill -r -domain local -domain system -domain user
        </code>
      </p>
    </div>,
  ],
};

export default Todo;
