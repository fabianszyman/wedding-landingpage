const { Client } = require("@notionhq/client");
require("dotenv").config();
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  console.log(body.phone);
  addItem(body.first, body.email, body.phone);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.first || !body.email || !body.phone) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Leider gab es einen Fehler" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.email} ${body.phone}` });
}

async function addItem(name, email, phone) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              type: "text",
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              type: "text",
              text: {
                content: email,
              },
            },
          ],
        },
        Phone: {
          phone_number: phone,
        },
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
}
