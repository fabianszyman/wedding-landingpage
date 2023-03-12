const { Client } = require("@notionhq/client");
require("dotenv").config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

async function addItem(text, desc) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              type: "text",
              text: {
                content: text,
              },
            },
          ],
        },
        Description: {
          rich_text: [
            {
              type: "text",
              text: {
                content: desc,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
}

addItem("Max Muster", "max@gmail.com");
