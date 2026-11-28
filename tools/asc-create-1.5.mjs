// Creates App Store version 1.5 (PREPARE_FOR_SUBMISSION) and sets "What's New" in the 6 locales. Does not attach a build or submit.
//   node tools/asc-create-1.5.mjs
import { asc, APP_ID } from './asc.mjs';

const WHATS_NEW = {
  'he': 'הסברים קוליים בכל שלב: כפתור ? משמיע מה לעשות. דף בית חדש עם תמונה לכל שלב. שלבים חדשים: תמרורים, דגלים ופאזל קשה של 12 חלקים. ציורים גדולים יותר בתשחצים.',
  'en-US': 'Spoken instructions for every stage: tap the ? button to hear what to do. New home screen with a picture for each stage. New stages: road signs, flags and a hard 12-piece puzzle. Bigger pictures in the crosswords.',
  'es-ES': 'Instrucciones habladas en cada etapa: toca el botón ? para escuchar qué hacer. Nueva pantalla de inicio con una imagen para cada etapa. Nuevas etapas: señales de tráfico, banderas y un rompecabezas difícil de 12 piezas. Imágenes más grandes en los crucigramas.',
  'es-MX': 'Instrucciones habladas en cada etapa: toca el botón ? para escuchar qué hacer. Nueva pantalla de inicio con una imagen para cada etapa. Nuevas etapas: señales de tráfico, banderas y un rompecabezas difícil de 12 piezas. Imágenes más grandes en los crucigramas.',
  'fr-FR': "Consignes parlées à chaque étape : touchez le bouton ? pour entendre quoi faire. Nouvel écran d'accueil avec une image pour chaque étape. Nouvelles étapes : panneaux routiers, drapeaux et un puzzle difficile de 12 pièces. Images plus grandes dans les mots croisés.",
  'ru': 'Голосовые подсказки на каждом этапе: нажмите кнопку ?, чтобы услышать, что делать. Новый главный экран с картинкой для каждого этапа. Новые этапы: дорожные знаки, флаги и сложный пазл из 12 частей. Более крупные картинки в кроссвордах.',
};

const existing = await asc('GET', `/v1/apps/${APP_ID}/appStoreVersions?filter%5BversionString%5D=1.5&filter%5Bplatform%5D=IOS`);
let version = existing.data[0];
if (!version) {
  const r = await asc('POST', '/v1/appStoreVersions', { data: { type: 'appStoreVersions',
    attributes: { platform: 'IOS', versionString: '1.5', releaseType: 'AFTER_APPROVAL', copyright: '2026 Gilad Cohen-Tal' },
    relationships: { app: { data: { type: 'apps', id: APP_ID } } } } });
  version = r.data;
  console.log('created version 1.5', version.id, version.attributes.appStoreState);
} else console.log('version 1.5 exists', version.id, version.attributes.appStoreState);

const locs = await asc('GET', `/v1/appStoreVersions/${version.id}/appStoreVersionLocalizations?limit=50`);
for (const l of locs.data) {
  const text = WHATS_NEW[l.attributes.locale];
  if (!text) { console.log('no text for', l.attributes.locale); continue; }
  await asc('PATCH', `/v1/appStoreVersionLocalizations/${l.id}`, { data: { type: 'appStoreVersionLocalizations', id: l.id, attributes: { whatsNew: text } } });
  console.log('whatsNew set', l.attributes.locale);
}
console.log('VERSION_ID', version.id);
