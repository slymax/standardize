let items = [];
const fs = require("fs");
fs.readdir(process.argv[2], (error, files) => {
    for (file in files) {
        fs.readFile(process.argv[2] + "/" + file, (error, data) => {
            data = JSON.parse(data);
            let title = data.text.split("\n")[0];
            if (title[0] !== "#") title = "";
            else data.text = data.text.replace(title + "\n\n","");
            items.push({
                "uuid": data.id,
                "content_type": "Note",
                "created_at": new Date(data.date_journal).toISOString(),
                "content": {
                  "title": title.replace("# ",""),
                  "text": data.text,
                  "references": [],
                  "appData": {}
                },
                "updated_at": new Date(data.date_modified).toISOString()
            });
        });
    };
    fs.writeFile("notes.txt", JSON.stringify({"items":items}), error => {
        if (error) console.log(error);
    });
});
