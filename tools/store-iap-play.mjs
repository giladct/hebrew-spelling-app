// Create the one-time product unlock_all_stages on Google Play: 7.90 ILS, other regions converted by Google.
// Rerun after the Play payments profile exists: node tools/store-iap-play.mjs
import { createRequire } from 'module';
const require = createRequire('C:/Users/vanta/Documents/gilad/claude/hebrew_spelling/package.json');
const { google } = require('googleapis');

const PKG = 'hebrew_spelling.myapp';
const ID = 'unlock_all_stages';
const auth = new google.auth.GoogleAuth({ keyFile: 'C:/Users/vanta/Documents/gilad/api-project-779059994785-3f6dabdc9261.json', scopes: ['https://www.googleapis.com/auth/androidpublisher'] });
const ap = google.androidpublisher({ version: 'v3', auth });

const conv = (await ap.monetization.convertRegionPrices({ packageName: PKG, requestBody: { price: { currencyCode: 'ILS', units: '7', nanos: 900000000 } } })).data;
const regionsVersion = conv.regionVersion.version;
const configs = Object.values(conv.convertedRegionPrices).map(r => ({ regionCode: r.regionCode, price: r.price, availability: 'AVAILABLE' }));
const il = configs.find(c => c.regionCode === 'IL');
il.price = { currencyCode: 'ILS', units: '7', nanos: 900000000 };
console.log('regions', configs.length, 'version', regionsVersion, 'IL', JSON.stringify(il.price), 'US', JSON.stringify(configs.find(c => c.regionCode === 'US')?.price));

const product = {
  packageName: PKG, productId: ID,
  listings: [{ languageCode: 'iw-IL', title: 'פתיחת כל השלבים', description: 'רכישה חד-פעמית שפותחת את שלבים 7 עד 17: קריאה מתקדמת, קריאה מדויקת, משפטים, משחקי זיכרון ותשחצים.' }],
  purchaseOptions: [{ purchaseOptionId: 'buy', buyOption: { legacyCompatible: true }, regionalPricingAndAvailabilityConfigs: configs }],
};
const r = await ap.monetization.onetimeproducts.patch({
  packageName: PKG, productId: ID, allowMissing: true, 'regionsVersion.version': regionsVersion,
  updateMask: 'listings,purchaseOptions', requestBody: product,
});
console.log('created:', r.data.productId, JSON.stringify(r.data.purchaseOptions?.map(o => [o.purchaseOptionId, o.state])));

const a = await ap.monetization.onetimeproducts.purchaseOptions.batchUpdateStates({
  packageName: PKG, productId: ID,
  requestBody: { requests: [{ activatePurchaseOptionRequest: { packageName: PKG, productId: ID, purchaseOptionId: 'buy' } }] },
});
console.log('activated:', JSON.stringify(a.data.oneTimeProducts?.[0]?.purchaseOptions?.map(o => [o.purchaseOptionId, o.state])));
