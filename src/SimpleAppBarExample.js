import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import KeyboardArrowDown from "material-ui/svg-icons/hardware/keyboard-arrow-down";

const SimpleAppBarExample = function()
{
    return (
        <div>
        <AppBar
            title="Title"
            iconElementRight={<IconButton><KeyboardArrowDown /></IconButton>}
        ></AppBar>
        </div>
    );
}

export default SimpleAppBarExample;
