import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Button, TimePicker } from 'antd';


function Contact() {
    const {data} = useContext(AppContext);
    const [open, setOpen] = useState(false);

    return ( <>
    <h3>Contact Page Updated</h3>
    <h4>{data.homePage || "No text"}</h4>
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
    </> );
}

export default Contact;