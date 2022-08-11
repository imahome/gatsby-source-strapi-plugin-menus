const fetch = require("node-fetch");
const STRAPI_NODE_TYPE = `StrapiMenus`;

const fetchMenuItems = async (url, headers) => {
  try {
    const response = await fetch(url, { headers: headers });
    return await response.json();
  } catch (err) {
    throw new Error(`Error, failed to fetch ${url}, `, err);
  }
};

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest, reporter },
  { apiURL, token }
) => {
  if (!apiURL || apiURL === "") {
    return reporter.error(
      "gatsby-source-strapi-menus: Please add your strapi apiURL endpoint"
    );
  }

  reporter.info(
    `gatsby-source-strapi-menus: Starting to fetch data from Strapi - /api/menus`
  );

  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = `${apiURL}/api/menus?nested&populate=*`;

  const response = await fetchMenuItems(url, headers);

  const items = response.data;

  if (items && Array.isArray(items)) {
    items.map((item) => {
      const node = {
        ...item,
        id: createNodeId(`${STRAPI_NODE_TYPE}-${item.id}`),
        parent: null,
        children: [],
        internal: {
          type: STRAPI_NODE_TYPE,
          content: JSON.stringify(item),
          contentDigest: createContentDigest(item),
        },
      };
      createNode(node);
    });
  } else {
    reporter.error(
      `gatsby-source-strapi-menus: Menus ${STRAPI_NODE_TYPE} is empty or isn't array`
    );
  }

  reporter.success(`gatsby-source-strapi-menus: Menus successfully sourced`);
};
