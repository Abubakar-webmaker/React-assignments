import React from "react";
import Heading from "./components/Heading.jsx";
import Paragraph from "./components/Paragraph.jsx"
import Image from "./components/Image.jsx";
import List from "./components/List.jsx";
import Table from "./components/Table.jsx";

function App() {
    return (
        <div>
            <Heading />
            <Paragraph />
            <Image />
            <List />
            <Table />
        </div>
    );
}

export default App;