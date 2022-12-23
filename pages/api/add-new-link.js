import { XataClient } from "../../xata";
const xata = new XataClient();
const handler = async (req, res) => {
  var generateRandomSlug = function () {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };
  const { id, url } = req.body;
  if (!url) {
    res.status(400).json({ error: "Missing URL or slug. Please try again." });
    return;
  }
  if (!id) {
    var randomSlug = generateRandomSlug();
    var data = await xata.db.links.getAll();
    data = data.filter((item) => item.slug === randomSlug);
    if (data.length > 0) {
      randomSlug = generateRandomSlug();
    }
    const record = await xata.db.links.create({
      slug: randomSlug,
      url: url,
    });
    if (record) {
      res.status(200).json({ ...record, error: null });
    }
    return;
  }
  var data = await xata.db.links.getAll();
  data = data.filter((item) => item.slug.toLowerCase() === id.toLowerCase());
  if (data.length > 0) {
    res
      .status(400)
      .json({ error: "Oops! That slug already exists. Try a different one." });
    return;
  }
  const record = await xata.db.links.create({
    slug: id,
    url: url,
  });
  if (record) {
    res.status(200).json({ ...record, error: null });
  }
};
export default handler;
