const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'zlvpcgia',      // Your real Project ID
  dataset: 'production',      // Your dataset
  apiVersion: '2023-01-01',
  useCdn: false,
});

module.exports = { client };
