"use server";

import clientRedis from "@/library/db";

export async function creteBooks(formdata: any) {
  const { title, author, rating } = Object.fromEntries(formdata);

  // create Books id
  let id = Math.floor(Math.random() * 1000000);
  //create hash

  await clientRedis.hSet(`books:${id}`, {
    title: title,
    author: author,
    rating,
    createdAt: new Date().toISOString(),
  });
}
