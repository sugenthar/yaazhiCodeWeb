import { STATUS } from './siteData';

const L = (en, ta) => ({ en, ta });

export const futureIntro = {
  heading: L('Future ideas are not released features', 'எதிர்கால யோசனைகள் வெளியிடப்பட்ட அம்சங்கள் அல்ல'),
  body: L(
    'The ideas below are future possibilities only. YaazhiCode 0.1.0 provides the language, commands, official IDE, standard library, and local web modules. No dates are promised.',
    'கீழுள்ளவை எதிர்கால சாத்தியங்கள் மட்டும். YaazhiCode 0.1.0 மொழி, கட்டளைகள், அதிகாரப்பூர்வ IDE, நிலையான நூலகம், உள்ளூர் வலைத் தொகுதிகளை வழங்குகிறது. எந்தத் தேதியும் உறுதியளிக்கப்படவில்லை.',
  ),
};

export const availableNow = [
  L('Tamil syntax for variables, conditions, loops, functions, and modules', 'மாறிகள், நிபந்தனைகள், சுழற்சிகள், செயல்கள், தொகுதிகளுக்கான தமிழ் தொடரியல்'),
  L('Lists, objects, classes, and error handling', 'பட்டியல்கள், பொருள்கள், வகுப்புகள், பிழை கையாளுதல்'),
  L('17 built-in Tamil modules', '17 உள்ளமைந்த தமிழ் தொகுதிகள்'),
  L('Official command line and IDE', 'அதிகாரப்பூர்வ கட்டளை வரி மற்றும் IDE'),
  L('Local HTTP and HTTPS applications', 'உள்ளூர் HTTP, HTTPS பயன்பாடுகள்'),
];

export const futurePhases = [
  {
    id: 'more-tamil',
    number: '01',
    title: L('More Tamil features', 'மேலும் தமிழ் அம்சங்கள்'),
    description: L('A future direction for the Tamil language experience.', 'தமிழ் மொழி அனுபவத்திற்கான எதிர்கால திசை.'),
    status: STATUS.future,
    items: [
      { title: L('Expanded Tamil syntax', 'விரிவான தமிழ் தொடரியல்'), desc: L('Refine wording and add more Tamil ways to express ideas.', 'சொற்களை மேம்படுத்தி, கருத்துகளை வெளிப்படுத்த மேலும் தமிழ் வழிகளைச் சேர்ப்பது.') },
      { title: L('Clearer Tamil messages', 'சிறந்த தமிழ் செய்திகள்'), desc: L('Make feedback easier to read and act on.', 'கருத்து ஓட்டத்தைப் படிக்கவும் பயன்படுத்தவும் எளிதாக்குவது.') },
      { title: L('More built-in capabilities', 'மேலும் உள்ளமைந்த திறன்கள்'), desc: L('Add more Tamil-named capabilities to the standard library.', 'நிலையான நூலகத்தில் மேலும் தமிழ்ப் பெயருடைய திறன்களைச் சேர்ப்பது.') },
      { title: L('Smoother learning workflow', 'எளிய கற்றல் ஓட்டம்'), desc: L('Improve everyday setup, feedback, and practice.', 'அன்றாட அமைப்பு, கருத்து ஓட்டம், பயிற்சி ஆகியவற்றை மேம்படுத்துவது.') },
    ],
  },
  {
    id: 'games-2d',
    number: '02',
    title: L('2D games', '2D கேம்கள்'),
    description: L('A future possibility for two-dimensional interactive worlds.', 'இரு பரிமாண ஊடாடும் உலகங்களுக்கான எதிர்கால சாத்தியம்.'),
    status: STATUS.future,
    items: [
      { title: L('2D worlds', '2D உலகங்கள்'), desc: L('Draw and organise a flat game scene.', 'தட்டையான கேம் காட்சியை வரைந்து ஒழுங்கமைத்தல்.') },
      { title: L('Character movement', 'பாத்திர நகர்வு'), desc: L('Move characters with keyboard input.', 'விசைப்பலகை உள்ளீட்டால் பாத்திரங்களை நகர்த்தல்.') },
      { title: L('Animation', 'அனிமேஷன்'), desc: L('Show frame-based changes in characters and objects.', 'பாத்திரங்கள் மற்றும் பொருட்களில் படிப்படியான மாற்றங்களைக் காட்டல்.') },
      { title: L('Collision detection', 'மோதல் கண்டறிதல்'), desc: L('Detect when game objects meet.', 'கேம் பொருட்கள் சந்திக்கும் நேரத்தைக் கண்டறிதல்.') },
      { title: L('Scenes', 'காட்சிகள்'), desc: L('Organise levels and screens as scenes.', 'நிலைகளையும் திரைகளையும் காட்சிகளாக ஒழுங்கமைத்தல்.') },
    ],
  },
  {
    id: 'games-3d',
    number: '03',
    title: L('3D games', '3D கேம்கள்'),
    description: L('A long-term research direction, not an available capability.', 'நீண்டகால ஆராய்ச்சி திசை; கிடைக்கும் திறன் அல்ல.'),
    status: STATUS.future,
    items: [
      { title: L('3D environments', '3D சூழல்கள்'), desc: L('Create worlds with depth and space.', 'ஆழமும் இடமும் கொண்ட உலகங்களை உருவாக்கம்.') },
      { title: L('3D models', '3D மாதிரிகள்'), desc: L('Place three-dimensional objects in a scene.', 'முப்பரிமாண பொருட்களைக் காட்சியில் வைப்பது.') },
      { title: L('Lighting', 'ஒளியமைப்பு'), desc: L('Add light sources and atmosphere.', 'ஒளி மூலங்கள் மற்றும் சூழலைச் சேர்ப்பது.') },
      { title: L('Camera controls', 'கேமரா கட்டுப்பாடு'), desc: L('Move and aim a camera through a world.', 'உலகில் கேமராவை நகர்த்தி குறிவைப்பது.') },
      { title: L('Physics', 'இயற்பியல்'), desc: L('Simulate forces, movement, and collision.', 'விசை, இயக்கம், மோதலை உருவகப்படுத்துவது.') },
      { title: L('3D drawing', '3D வரைதல்'), desc: L('Draw the final scene to the screen.', 'இறுதி காட்சியைத் திரையில் வரைவது.') },
    ],
  },
  {
    id: 'animation',
    number: '04',
    title: L('Animation and interactive media', 'அனிமேஷன் மற்றும் ஊடாடும் ஊடகம்'),
    description: L('A future way to make Tamil programs visual.', 'தமிழ் நிரல்களைக் காட்சியுடன் மாற்றும் எதிர்கால வழி.'),
    status: STATUS.future,
    items: [
      { title: L('Character animation', 'பாத்திர அனிமேஷன்'), desc: L('Animate people and creatures in stories and games.', 'கதைகள் மற்றும் கேம்களில் மனிதர்கள், உயிரினங்களுக்கு அனிமேஷன்.') },
      { title: L('Motion graphics', 'இயக்க வரைகலை'), desc: L('Create moving shapes, text, and effects.', 'நகரும் வடிவங்கள், உரை, விளைவுகளை உருவாக்கம்.') },
      { title: L('Interactive animation', 'ஊடாடும் அனிமேஷன்'), desc: L('Respond to input with visual feedback.', 'உள்ளீட்டிற்கு காட்சி பதிலளிப்பைக் கொடுப்பது.') },
      { title: L('Visual effects', 'காட்சி விளைவுகள்'), desc: L('Add finishing effects to interactive programs.', 'ஊடாடும் நிரல்களுக்கு மெருகூட்டப்பட்ட விளைவுகளைச் சேர்ப்பது.') },
    ],
  },
];

export const creativeVision = [
  {
    id: '2d',
    title: L('2D possibilities', '2D சாத்தியங்கள்'),
    lead: L('Future only — no 2D capability exists today.', 'எதிர்காலம் மட்டும் — இன்று 2D திறன் எதுவும் இல்லை.'),
    items: [
      L('2D games', '2D கேம்கள்'),
      L('Character movement', 'பாத்திர நகர்வு'),
      L('Animation', 'அனிமேஷன்'),
      L('Collision detection', 'மோதல் கண்டறிதல்'),
      L('Keyboard controls', 'விசைப்பலகை கட்டுப்பாடு'),
    ],
  },
  {
    id: '3d',
    title: L('3D possibilities', '3D சாத்தியங்கள்'),
    lead: L('Research direction, not a released or experimental capability.', 'ஆராய்ச்சி திசை; வெளியிடப்பட்ட அல்லது பரிசோதனைத் திறன் அல்ல.'),
    items: [
      L('3D environments', '3D சூழல்கள்'),
      L('3D models', '3D மாதிரிகள்'),
      L('Lighting', 'ஒளியமைப்பு'),
      L('Camera controls', 'கேமரா கட்டுப்பாடு'),
      L('Physics', 'இயற்பியல்'),
    ],
  },
];
