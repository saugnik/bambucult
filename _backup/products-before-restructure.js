/*
  BambooCult catalogue data.

  Photos are matched to products by code, not by name:
    images/products/BC-103.jpg      main photo
    images/products/BC-103-2.jpg    extra views (-2 up to -6), optional

  Fields
    id       used in the page address (product.html?p=id), keep it unique
    code     shown on the site and used for photo file names
    cat      main category id (see BC_CATEGORIES)
    also     other categories the product should appear in
    type     sub-type inside a category, used by the filter chips
    engrave  true if you can laser-engrave a name or logo on it
    featured true to show it on the home page
*/

window.BC_CATEGORIES = [
  {
    id: 'oral-care',
    name: 'Oral care',
    types: ['Adult', 'Kids', 'Accessories'],
    blurb: 'Bamboo toothbrushes for adults and children (charcoal, natural, nano white and medium bristles) plus tongue cleaners, cases and holders.',
    buyers: 'Hotels and homestays, dental clinics, pharmacies, retail stores'
  },
  {
    id: 'personal-care',
    name: 'Personal care',
    blurb: 'Razors, combs, cotton buds, makeup brushes and travel kits. The bathroom shelf, minus the plastic.',
    buyers: 'Salons, hotels, gift-box makers, retail stores'
  },
  {
    id: 'corporate-gifts',
    name: 'Corporate gifts',
    blurb: 'Drinkware, desk pieces and small gifts that people actually keep. Most of them can carry your logo.',
    buyers: 'HR and admin teams, event organisers, gifting companies'
  },
  {
    id: 'stationery',
    name: 'Stationery',
    blurb: 'Bamboo pens, a pencil that never needs sharpening, and notepads made from recycled paper.',
    buyers: 'Offices, schools, conferences, gifting companies'
  },
  {
    id: 'home',
    name: 'Home & kitchen',
    blurb: 'Cooking tools, wind chimes, plant food and other small things for the house.',
    buyers: 'Kitchen and home stores, nurseries, gift shops'
  },
  {
    id: 'jewellery',
    name: 'Jewellery',
    types: ['Earrings', 'Necklace sets', 'Bangles'],
    blurb: 'Earrings, necklace sets and bangles hand-woven from fine bamboo slivers. Light to wear, and no two pieces are quite the same.',
    buyers: 'Boutiques, craft and museum shops, online sellers'
  },
  {
    id: 'pet-care',
    name: 'Pet care',
    blurb: 'A toothbrush and a grooming brush for dogs and cats.',
    buyers: 'Pet stores, groomers, vet clinics'
  },
  {
    id: 'festive',
    name: 'Festive',
    blurb: 'Handmade bamboo rakhis and gift combos for Raksha Bandhan.',
    buyers: 'Gift shops, retail stores, festive corporate gifting'
  }
];

(() => {
  const brush = (bristles, pack, extra) => Object.assign({
    Handle: 'Natural bamboo, biodegradable',
    Bristles: bristles,
    Pack: pack,
    Packaging: 'Biodegradable paper'
  }, extra);

  const jewel = (form, extra) => Object.assign({
    Material: 'Hand-woven bamboo sliver',
    Form: form,
    Finish: 'Natural, very lightweight',
    Note: 'Handmade, so small variations between pieces are normal'
  }, extra);

  const handmade = extra => Object.assign({ Material: 'Bamboo, handcrafted' }, extra);

  window.BC_PRODUCTS = [
    /* Oral care: adult */
    {
      id: 'toothbrush-charcoal-adult-soft', code: 'BC-101', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Charcoal Adult – Soft',
      desc: 'Soft, charcoal-infused bristles set in a smooth bamboo handle. A good everyday brush for adults with sensitive gums. Sold singly, in a paper carton.',
      specs: brush('Charcoal-infused, soft, BPA-free', '1 brush')
    },
    {
      id: 'toothbrush-charcoal-adult-soft-pack-2', code: 'BC-102', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Charcoal Adult – Soft (Pack of 2)',
      desc: 'The soft charcoal brush, two to a pack. Handy for couples, guest rooms and combo shelves.',
      specs: brush('Charcoal-infused, soft, BPA-free', '2 brushes')
    },
    {
      id: 'toothbrush-charcoal-adult-soft-pack-4', code: 'BC-103', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true, featured: true,
      name: 'Bamboo Toothbrush Charcoal Adult – Soft (Pack of 4)',
      desc: 'The soft charcoal adult brush, four to a pack. At the usual change every three months, that is a year of brushing for one person.',
      specs: brush('Charcoal-infused, soft, BPA-free', '4 brushes')
    },
    {
      id: 'toothbrush-charcoal-adult-soft-tongue-cleaner-holder', code: 'BC-104', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Charcoal Adult – Soft with Tongue Cleaner & Holder',
      desc: 'A complete set: the soft charcoal brush, a bamboo tongue cleaner and a bamboo holder to stand them in. Works as a bathroom gift or a step up in hotel amenities.',
      specs: brush('Charcoal-infused, soft, BPA-free', '1 brush, 1 tongue cleaner, 1 holder')
    },
    {
      id: 'toothbrush-charcoal-neem-adult', code: 'BC-105', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Charcoal Neem Adult',
      desc: 'Bristles infused with charcoal and neem, on a bamboo handle. For buyers who want the familiar neem angle on a modern brush.',
      specs: brush('Charcoal and neem infused, BPA-free', '1 brush')
    },
    {
      id: 'toothbrush-standard-adult-medium', code: 'BC-106', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Standard Adult – Medium',
      desc: 'A straightforward bamboo brush with medium white bristles, for people who find soft bristles too gentle.',
      specs: brush('Medium, BPA-free', '1 brush')
    },
    {
      id: 'toothbrush-standard-adult-medium-pack-2', code: 'BC-107', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Standard Adult – Medium (Pack of 2)',
      desc: 'The standard medium brush, two to a pack.',
      specs: brush('Medium, BPA-free', '2 brushes')
    },
    {
      id: 'toothbrush-standard-adult-medium-pack-4', code: 'BC-108', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Standard Adult – Medium Bristles (Pack of 4)',
      desc: 'The standard medium brush in a pack of four: a year’s supply for one person, or one each for a family.',
      specs: brush('Medium, BPA-free', '4 brushes')
    },
    {
      id: 'toothbrush-natural-adult', code: 'BC-109', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Natural Adult',
      desc: 'A bamboo handle left close to its natural finish, with BPA-free bristles. Simple and light, with nothing plastic on the outside.',
      specs: brush('BPA-free', '1 brush')
    },
    {
      id: 'toothbrush-natural-adult-pack-4', code: 'BC-110', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Natural Adult (Pack of 4)',
      desc: 'Four natural-finish adult brushes in one pack.',
      specs: brush('BPA-free', '4 brushes')
    },
    {
      id: 'toothbrush-natural-pack-4', code: 'BC-111', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true, featured: true,
      name: 'Bamboo Toothbrush Natural – Pack of 4',
      desc: 'Four soft-bristle brushes on natural bamboo handles. Gentle enough for daily use, and the handle can be composted once the bristles are pulled out.',
      specs: brush('Soft, BPA-free', '4 brushes')
    },
    {
      id: 'toothbrush-nano-white-flat-handle', code: 'BC-112', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Nano White – Flat Handle',
      desc: 'Ultra-fine “nano” white bristles on a flat bamboo handle. The thinner filaments feel very soft along the gumline.',
      specs: brush('Nano, ultra-fine, white', '1 brush', { Handle: 'Flat bamboo handle, biodegradable' })
    },
    {
      id: 'toothbrush-nano-white-ultra-soft-round-handle', code: 'BC-113', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true, featured: true,
      name: 'Bamboo Toothbrush Nano White Ultra Soft – Round Handle',
      desc: 'The nano white brush with a rounded handle that sits comfortably in the hand. Ultra soft, for people who brush hard or have sensitive gums.',
      specs: brush('Nano, ultra soft, white', '1 brush', { Handle: 'Round bamboo handle, biodegradable' })
    },
    {
      id: 'toothbrush-nano-white-round-handle-pack-4', code: 'BC-114', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush Nano White – Round Handle (Pack of 4)',
      desc: 'The round-handle nano white brush, four to a pack.',
      specs: brush('Nano, ultra soft, white', '4 brushes', { Handle: 'Round bamboo handle, biodegradable' })
    },
    {
      id: 'toothbrush-pack-2-with-tongue-cleaner', code: 'BC-115', cat: 'oral-care', also: ['personal-care'], type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush (Pack of 2) with Tongue Cleaner',
      desc: 'Two brushes, one white medium and one charcoal soft, plus a bamboo tongue cleaner. A neat starter set for someone moving off plastic.',
      specs: brush('1 white medium, 1 charcoal soft', '2 brushes, 1 tongue cleaner')
    },
    {
      id: 'executive-toothbrush-with-holder', code: 'BC-116', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Executive Toothbrush with Holder (Combo Pack)',
      desc: 'A full-size bamboo brush paired with a bamboo stand. Looks at home on a hotel vanity or in a corporate welcome kit.',
      specs: brush('BPA-free', '1 brush, 1 holder')
    },
    {
      id: 'travel-toothbrush-white-soft', code: 'BC-117', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Travel Toothbrush White Soft Brush',
      desc: 'A compact bamboo travel brush with soft white bristles that packs away neatly. Made for washbags, gym kits and overnight amenity sets.',
      specs: brush('Soft, white, BPA-free', '1 brush')
    },
    {
      id: 'denture-toothbrush-adult', code: 'BC-118', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Denture Toothbrush Adult',
      desc: 'A dual-head brush for dentures: firm bristles for the plate, and a smaller head for clasps and corners. Bamboo handle with an easy grip.',
      specs: brush('Firm, dual head', '1 brush')
    },
    {
      id: 'toothbrush-zodiac-pack-12', code: 'BC-119', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Bamboo Toothbrush – Zodiac – Pack of 12 Brushes',
      desc: 'Twelve brushes, one for each sign of the zodiac. Fun as a family set, and even better as a counter display in a store.',
      specs: brush('Charcoal-infused, BPA-free', '12 brushes')
    },
    {
      id: 'toothbrush-dino', code: 'BC-120', cat: 'oral-care', type: 'Adult', engrave: true,
      name: 'Dino – Bamboo Toothbrush',
      desc: 'A bamboo brush from the Dino range, with medium BPA-free bristles. Ask us about the handle designs currently available.',
      specs: brush('Medium, BPA-free', '1 brush')
    },
    {
      id: 'toothbrush-family-pack-4', code: 'BC-121', cat: 'oral-care', also: ['personal-care'], type: ['Adult', 'Kids'], engrave: true, featured: true,
      name: 'Bamboo Toothbrush Family Pack – Adult + Kids (Pack of 4)',
      desc: 'Two adult and two kids’ brushes, all soft-bristled, in one pack. One box covers a family of four.',
      specs: brush('Soft, BPA-free', '2 adult brushes, 2 kids’ brushes')
    },

    /* Oral care: kids */
    {
      id: 'toothbrush-charcoal-kids', code: 'BC-122', cat: 'oral-care', type: 'Kids', engrave: true,
      name: 'Bamboo Toothbrush Charcoal Kids',
      desc: 'A smaller head and shorter handle sized for children, with soft charcoal-infused bristles.',
      specs: brush('Charcoal-infused, soft, BPA-free', '1 brush')
    },
    {
      id: 'toothbrush-charcoal-kids-pack-2', code: 'BC-123', cat: 'oral-care', type: 'Kids', engrave: true,
      name: 'Bamboo Toothbrush Charcoal Kids (Pack of 2)',
      desc: 'The kids’ charcoal brush, two to a pack.',
      specs: brush('Charcoal-infused, soft, BPA-free', '2 brushes')
    },
    {
      id: 'toothbrush-natural-kids', code: 'BC-124', cat: 'oral-care', also: ['personal-care'], type: 'Kids', engrave: true,
      name: 'Bamboo Toothbrush Natural Kids',
      desc: 'A child-sized bamboo brush with soft, BPA-free bristles. Light, smooth and easy for small hands to hold.',
      specs: brush('Soft, BPA-free', '1 brush')
    },
    {
      id: 'toothbrush-natural-kids-pack-2', code: 'BC-125', cat: 'oral-care', also: ['personal-care'], type: 'Kids', engrave: true,
      name: 'Bamboo Toothbrush Natural Kids (Pack of 2)',
      desc: 'The natural kids’ brush, two to a pack.',
      specs: brush('Soft, BPA-free', '2 brushes')
    },

    /* Oral care: accessories */
    {
      id: 'tongue-brush', code: 'BC-126', cat: 'oral-care', also: ['personal-care'], type: 'Accessories',
      name: 'Bamboo Tongue Brush',
      desc: 'A bamboo tongue brush with a textured head that lifts residue from the tongue. Pairs naturally with any of our toothbrushes.',
      specs: { Material: 'Bamboo handle', Pack: '1 piece' }
    },
    {
      id: 'tongue-cleaner', code: 'BC-127', cat: 'oral-care', also: ['personal-care'], type: 'Accessories',
      name: 'Bamboo Tongue Cleaner',
      desc: 'A simple curved tongue cleaner in natural bamboo. One gentle pass from back to front each morning is all it takes.',
      specs: { Material: 'Bamboo', Pack: '1 piece' }
    },
    {
      id: 'interdental-brushes-pack-4', code: 'BC-128', cat: 'oral-care', also: ['personal-care'], type: 'Accessories',
      name: 'Bamboo Interdental Brushes (4 Pack)',
      desc: 'Small bamboo-handled brushes for the gaps between teeth that a toothbrush misses. Four in a pack.',
      specs: { Handle: 'Bamboo', Pack: '4 brushes' }
    },
    {
      id: 'toothbrush-case', code: 'BC-129', cat: 'oral-care', type: 'Accessories', engrave: true,
      name: 'Bamboo Toothbrush Case',
      desc: 'A smooth bamboo tube that holds a single toothbrush. For travel bags and gym kits, and nice enough to give as a gift.',
      specs: { Material: 'Bamboo', Fits: 'One standard toothbrush' }
    },
    {
      id: 'toothbrush-case-with-charcoal-brush', code: 'BC-130', cat: 'oral-care', type: 'Accessories', engrave: true,
      name: 'Bamboo Toothbrush Case with Flat Handle Charcoal Brush',
      desc: 'The bamboo travel tube with a flat-handle charcoal brush inside. Ready to gift as it is.',
      specs: { Material: 'Bamboo', Contents: '1 bamboo case, 1 flat-handle charcoal toothbrush' }
    },
    {
      id: 'toothbrush-holder', code: 'BC-131', cat: 'oral-care', type: 'Accessories',
      name: 'Bamboo Toothbrush Holder',
      desc: 'A handcrafted bamboo stand for your toothbrushes. Toothbrushes are not included.',
      specs: handmade({ Pack: '1 holder' })
    },

    /* Personal care */
    {
      id: 'shaving-razor-natural', code: 'BC-201', cat: 'personal-care', engrave: true,
      name: 'Bamboo Natural Shaving Razor',
      desc: 'A bamboo-handled razor with a triple stainless-steel blade and a replaceable head. Change the head, keep the handle.',
      specs: { Handle: 'Natural bamboo', Blade: 'Triple stainless steel, replaceable head' }
    },
    {
      id: 'shaving-razor-pack-2-with-gel', code: 'BC-202', cat: 'personal-care', featured: true,
      name: 'Bamboo Shaving Razor – Pack of 2 with Shaving Gel',
      desc: 'Two handmade bamboo safety razors and a shaving gel. Only the blade is ever replaced; the handle lasts. For men and women.',
      specs: { Handle: 'Handmade bamboo, ergonomic grip', Pack: '2 razors, 1 shaving gel' }
    },
    {
      id: 'pocket-hair-comb', code: 'BC-203', cat: 'personal-care',
      name: 'Bamboo Pocket Hair Comb',
      desc: 'A pocket-sized comb cut from natural bamboo, with smooth, rounded teeth that glide through hair.',
      specs: { Material: 'Natural bamboo', Size: '130 × 30 × 5 mm' }
    },
    {
      id: 'cotton-buds-100', code: 'BC-204', cat: 'personal-care',
      name: 'Bamboo Cotton Buds (100 Sticks)',
      desc: 'Bamboo sticks with soft cotton tips, 100 to a box. The stick and the tip are both biodegradable.',
      specs: { Stick: 'Bamboo', Tip: 'Cotton', Pack: '100 buds' }
    },
    {
      id: 'makeup-brush-set-with-pouch', code: 'BC-205', cat: 'personal-care', also: ['corporate-gifts'],
      name: 'Bamboo Makeup Brush Set with Pouch',
      desc: 'Eleven makeup brushes with bamboo handles and very soft bristles, in a pouch that keeps them together. A good-looking gift set.',
      specs: { Handles: 'Bamboo', Pack: '11 brushes and a storage pouch' }
    },
    {
      id: 'soap-case', code: 'BC-206', cat: 'personal-care', also: ['home'],
      name: 'Bamboo Soap Case',
      desc: 'A bamboo soap dish that lets water drain away so the bar stays dry. Water-resistant finish, easy to rinse clean.',
      specs: { Material: 'Bamboo, water-resistant finish', Size: 'Approx. 11.6 × 8 × 1.3 cm' }
    },
    {
      id: 'straws-pack-4-with-cleaner', code: 'BC-207', cat: 'personal-care', also: ['home'],
      name: 'Bamboo Natural Straws (Pack of 4) with Cleaner',
      desc: 'Four reusable straws cut from natural bamboo stems, with a brush to clean them. Each one differs slightly in colour and thickness. That is the plant, not a defect.',
      specs: { Material: 'Natural bamboo stem', Pack: '4 straws, 1 cleaning brush' }
    },
    {
      id: 'travel-kit', code: 'BC-208', cat: 'personal-care', also: ['corporate-gifts'],
      name: 'Bamboo Travel Kit',
      desc: 'Everything for a plastic-free overnight bag, apart from the brush bristles: a toothbrush, cotton buds, a comb, a tongue cleaner, a straw and a straw cleaner.',
      specs: { Contents: 'Toothbrush, 4 cotton buds, comb (14 × 3 × 0.5 cm), tongue cleaner, straw, straw cleaner' }
    },
    {
      id: 'green-box', code: 'BC-209', cat: 'personal-care', also: ['corporate-gifts'],
      name: 'Bamboo Green Box',
      desc: 'A small kit for brushing and eating on the go. Easy to carry, easy to store, and an easy gift.',
      specs: { Contents: 'Toothbrush, fork, spoon, knife, straw, straw cleaner' }
    },
    {
      id: 'b-safe-key', code: 'BC-210', cat: 'personal-care', also: ['corporate-gifts'], engrave: true,
      name: 'Bamboo B-Safe Key',
      desc: 'A pocket-sized bamboo tool for pressing lift buttons, opening doors and using keypads without touching them. It also works as a small phone holder.',
      specs: { Material: 'Bamboo, water-resistant finish', Weight: 'Lightweight, fits a keyring or pocket' }
    },

    /* Corporate gifts */
    {
      id: 'thermos-coffee-mug', code: 'BC-301', cat: 'corporate-gifts', engrave: true, featured: true,
      name: 'Bamboo Thermos Coffee Mug',
      desc: 'An insulated 12 oz mug with a bamboo outer and a 304 stainless-steel inside. Hot drinks stay hot, cold ones stay cold, and a logo engraves cleanly on the bamboo.',
      specs: { Capacity: '12 oz (about 350 ml)', Body: 'Bamboo outer, 304 stainless-steel inner', Use: 'Coffee, tea, infused water' }
    },
    {
      id: 'insulated-water-bottle-450ml', code: 'BC-302', cat: 'corporate-gifts', engrave: true, featured: true,
      name: 'Bamboo Insulated Water Bottle – 450 ml',
      desc: 'A bamboo and stainless-steel bottle that holds 450 ml. Sturdy enough for the daily commute, and an easy one to put a logo on.',
      specs: { Capacity: '450 ml', Body: 'Bamboo and stainless steel' }
    },
    {
      id: 'speaker-classic', code: 'BC-303', cat: 'corporate-gifts', featured: true,
      name: 'Bamboo Speaker – Classic',
      desc: 'A passive speaker made from bamboo and rattan. Slot your phone in and the shape amplifies the sound. No battery, no charging, no Bluetooth pairing.',
      specs: handmade({ Material: 'Bamboo and rattan, handmade', Power: 'None needed (passive amplifier)' })
    },
    {
      id: 'mobile-speaker-mini', code: 'BC-304', cat: 'corporate-gifts',
      name: 'Bamboo Mobile Speaker – Mini',
      desc: 'A smaller passive speaker cut from a bamboo section. It holds the phone upright and carries the sound further. No power needed.',
      specs: handmade({ Power: 'None needed (passive amplifier)', Note: 'Phone not included' })
    },
    {
      id: 'mobile-speaker-mini-pack-2', code: 'BC-305', cat: 'corporate-gifts',
      name: 'Bamboo Mobile Speaker – Mini (Pack of 2)',
      desc: 'The mini bamboo speaker, two to a pack.',
      specs: handmade({ Pack: '2 speakers', Power: 'None needed (passive amplifier)' })
    },
    {
      id: 'mobile-stand', code: 'BC-306', cat: 'corporate-gifts',
      name: 'Bamboo Mobile Stand',
      desc: 'A handcrafted bamboo stand that holds a phone upright on the desk, for video calls, recipes, or just keeping it off the table.',
      specs: handmade({ Note: 'Phone not included' })
    },
    {
      id: 'desk-organizer', code: 'BC-307', cat: 'corporate-gifts',
      name: 'Bamboo Desk Organiser',
      desc: 'A pen and stationery holder handcrafted from bamboo stems. Gives a desk a bit of warmth. Stationery not included.',
      specs: handmade({ Material: 'Bamboo stems, handcrafted' })
    },
    {
      id: 'mobile-desk-organiser', code: 'BC-308', cat: 'corporate-gifts',
      name: 'Bamboo Mobile & Desk Organiser',
      desc: 'Pens in one section, phone in the other. A compact bamboo organiser that tidies a desk without taking it over.',
      specs: handmade({ Holds: 'Phone, pens and small stationery' })
    },
    {
      id: 'fridge-magnet-bottle-opener', code: 'BC-309', cat: 'corporate-gifts', also: ['home'], engrave: true,
      name: 'Bamboo Fridge Magnet and Bottle Opener',
      desc: 'A round bamboo fridge magnet with a bottle opener built in. At 60 mm across, there is plenty of room for a name or logo.',
      specs: { Material: 'Bamboo', Size: '60 mm diameter × 10 mm' }
    },
    {
      id: 'door-bell-round', code: 'BC-310', cat: 'corporate-gifts', also: ['home'],
      name: 'Japanese Style Bamboo Door Bell – Round Shape',
      desc: 'A Japanese-style bamboo chime with a round top. Hang it by the door and it rings softly in the breeze or whenever the door opens.',
      specs: { Material: 'Bamboo', Use: 'Doorways, windows, balconies' }
    },
    {
      id: 'door-bell-sparrow', code: 'BC-311', cat: 'corporate-gifts', also: ['home'],
      name: 'Japanese Style Bamboo Door Bell – Sparrow Shape',
      desc: 'The same bamboo door chime, with a little sparrow at the top.',
      specs: { Material: 'Bamboo', Use: 'Doorways, windows, balconies' }
    },

    /* Stationery */
    {
      id: 'pen-classic', code: 'BC-401', cat: 'stationery', also: ['corporate-gifts'], engrave: true,
      name: 'Bamboo Pen – Classic',
      desc: 'A slim bamboo pen for everyday writing. Light, smooth, and sensible value in bulk.',
      specs: { Barrel: 'Bamboo', Ink: 'Ballpoint' }
    },
    {
      id: 'pen-executive', code: 'BC-402', cat: 'stationery', also: ['corporate-gifts'], engrave: true, featured: true,
      name: 'Bamboo Pen – Executive',
      desc: 'A more substantial bamboo pen, made to be noticed in a boardroom or a welcome kit.',
      specs: { Barrel: 'Bamboo', Ink: 'Ballpoint' }
    },
    {
      id: 'fountain-pen-executive-with-case', code: 'BC-403', cat: 'stationery', also: ['corporate-gifts'], engrave: true,
      name: 'Bamboo Fountain Pen with Case – Executive',
      desc: 'A bamboo fountain pen in a matching carry case. The kind of gift that stays on someone’s desk.',
      specs: { Barrel: 'Bamboo', Includes: 'Carry case' }
    },
    {
      id: 'pen-with-stylus', code: 'BC-404', cat: 'stationery', also: ['corporate-gifts'], engrave: true,
      name: 'Bamboo Pen with Stylus',
      desc: 'A push-button bamboo pen with a stylus tip for touchscreens, and a chrome-finish button, tip and clip.',
      specs: { Barrel: 'Bamboo', Size: '12 × 15 × 140 mm', Weight: 'Approx. 9 g', Packaging: 'Paper box' }
    },
    {
      id: 'infinity-pencil-pack-4', code: 'BC-405', cat: 'stationery', also: ['corporate-gifts'], engrave: true, featured: true,
      name: 'Tree Free – Infinity Bamboo Pencil (Pack of 4)',
      desc: 'A bamboo pencil with a replaceable graphite tip, so there is no sharpening and no shavings. Four to a pack.',
      specs: { Body: 'Bamboo', Tip: 'Replaceable graphite', Pack: '4 pencils' }
    },
    {
      id: 'customised-pencils-pack-10', code: 'BC-406', cat: 'stationery', also: ['corporate-gifts'], engrave: true, featured: true,
      name: 'Customised Premium Writing Pencils – Pack of 10',
      desc: 'Ten bamboo pencils, each engraved with a name, logo or short message. Made for school events, conferences and return gifts.',
      specs: { Body: 'Premium bamboo', Pack: '10 pencils', Personalisation: 'Name, logo or message on every pencil' }
    },
    {
      id: 'notepad-with-pen-200-pages', code: 'BC-407', cat: 'stationery', also: ['corporate-gifts'], engrave: true, featured: true,
      name: 'Bamboo Eco Friendly Notepad with Pen – 200 Pages',
      desc: 'A pocket notepad of 200 lined pages in recycled paper (you can tell from the warm, slightly yellow tint) with a bamboo pen. The cover can be laser-engraved.',
      specs: { Pages: '200, lined', Paper: '100% recycled', Includes: 'Bamboo pen' }
    },

    /* Home & kitchen */
    {
      id: 'cutlery-set-7-pieces', code: 'BC-501', cat: 'home', featured: true,
      name: 'Bamboo Cutlery Set – 7 Pieces',
      desc: 'Seven bamboo cooking tools that won’t scratch non-stick pans: a cooking spoon, slotted spoon, solid spoon, flat spatula, slotted spatula, wide spatula and tongs.',
      specs: { Material: 'Bamboo', Pieces: 'Cooking spoon, slotted spoon, solid spoon, flat spatula, slotted spatula, wide solid spatula, tongs' }
    },
    {
      id: 'fertilizer-spike-500g', code: 'BC-502', cat: 'home',
      name: 'Bamboo Fertilizer Spike – 500 g',
      desc: 'Plant food sticks made with bamboo dust, for potted plants indoors or out. Push them into the soil and water as usual.',
      specs: { Weight: '500 g', Use: 'Potted indoor and outdoor plants' }
    },

    /* Pet care */
    {
      id: 'pet-toothbrush-koko', code: 'BC-601', cat: 'pet-care',
      name: 'Bamboo Pet Toothbrush – Koko',
      desc: 'A bamboo toothbrush for dogs and cats, with medium nylon bristles. Wet the bristles before each use to soften them.',
      specs: { Handle: 'Bamboo', Bristles: 'Nylon, medium' }
    },
    {
      id: 'pet-deshedding-brush', code: 'BC-602', cat: 'pet-care',
      name: 'Bamboo Deshedding Brush for Dogs and Cats',
      desc: 'Two brushes in one: dense, soft bristles on one side to lift loose hair, and a pin comb on the other to work out the undercoat. The pins have rounded ends.',
      specs: { Body: 'Bamboo', Sides: 'Soft bristle brush and pin comb' }
    },

    /* Jewellery: necklace sets and bangles */
    { id: 'jasmine-necklace', code: 'BC-701', cat: 'jewellery', type: 'Necklace sets', name: 'Jasmine Necklace', desc: 'A necklace and earring set built around woven jasmine-flower motifs.', specs: jewel('Necklace with earrings') },
    { id: 'beads-mala-marigold-pendant', code: 'BC-702', cat: 'jewellery', type: 'Necklace sets', name: 'Beads Mala with Marigold Pendant', desc: 'Knotted bamboo beads finished with a marigold pendant. Comes with matching earrings.', specs: jewel('Necklace with earrings') },
    { id: 'beads-mala-flower-pendant', code: 'BC-703', cat: 'jewellery', type: 'Necklace sets', name: 'Beads Mala with Flower Pendant', desc: 'A bead necklace with a woven flower pendant and matching earrings.', specs: jewel('Necklace with earrings') },
    { id: 'flat-star-mala-juhiring-pendant', code: 'BC-704', cat: 'jewellery', type: 'Necklace sets', name: 'Flat Star Mala with Juhiring Pendant', desc: 'Flat woven stars strung into a mala, with a star-in-ring pendant and matching earrings.', specs: jewel('Necklace with earrings') },
    { id: 'flat-star-mala-sunflower-pendant', code: 'BC-705', cat: 'jewellery', type: 'Necklace sets', name: 'Flat Star Mala with Sunflower Pendant', desc: 'Clusters of flat stars around a sunflower pendant. Earrings included.', specs: jewel('Necklace with earrings') },
    { id: 'beads-mala', code: 'BC-706', cat: 'jewellery', type: 'Necklace sets', name: 'Beads Mala', desc: 'A necklace of hand-knotted bamboo beads, with matching earrings.', specs: jewel('Necklace with earrings') },
    { id: 'shell-set', code: 'BC-707', cat: 'jewellery', type: 'Necklace sets', name: 'Shell Set', desc: 'Necklace and earrings made from small shell-shaped bamboo weaves.', specs: jewel('Necklace with earrings') },
    { id: 'juhi-cuboid-mala', code: 'BC-708', cat: 'jewellery', type: 'Necklace sets', name: 'Juhi Cuboid Mala', desc: 'Juhi star motifs alternating with small woven cubes, with matching earrings.', specs: jewel('Necklace with earrings') },
    { id: 'rhombus-mala', code: 'BC-709', cat: 'jewellery', type: 'Necklace sets', name: 'Rhombus Mala', desc: 'Diamond-weave pendants strung as a mala, with matching earrings.', specs: jewel('Necklace with earrings') },
    { id: 'juhi-candle-mala', code: 'BC-710', cat: 'jewellery', type: 'Necklace sets', name: 'Juhi Candle Mala', desc: 'Stars and slim woven cylinders, strung one after the other. Matching earrings included.', specs: jewel('Necklace with earrings') },
    { id: 'juhi-haar', code: 'BC-711', cat: 'jewellery', type: 'Necklace sets', name: 'Juhi Haar', desc: 'A fuller, haar-style necklace of clustered juhi stars.', specs: jewel('Necklace') },
    { id: 'bamboo-bangles', code: 'BC-712', cat: 'jewellery', type: 'Bangles', name: 'Bamboo Bangles', desc: 'Smooth handcrafted bamboo bangles that show off the natural grain. Light enough to wear all day.', specs: jewel('Bangles', { Material: 'Bamboo, handcrafted' }) },

    /* Jewellery: earrings */
    { id: 'juhi-earrings', code: 'BC-713', cat: 'jewellery', type: 'Earrings', name: 'Juhi Earrings', desc: 'A single woven juhi star. The simplest piece in the range, and one of the easiest to wear.', specs: jewel('Drop earrings') },
    { id: 'juhi-studs', code: 'BC-714', cat: 'jewellery', type: 'Earrings', name: 'Juhi Studs', desc: 'Small juhi stars made as studs, for everyday wear.', specs: jewel('Stud earrings') },
    { id: 'double-layer-juhi-earrings', code: 'BC-715', cat: 'jewellery', type: 'Earrings', name: 'Double Layer Juhi Earrings', desc: 'Two three-dimensional stars joined by a fine bamboo link.', specs: jewel('Drop earrings') },
    { id: 'triple-layer-juhi-earrings', code: 'BC-716', cat: 'jewellery', type: 'Earrings', name: 'Triple Layer Juhi Earrings', desc: 'Three juhi stars falling in a cascade.', specs: jewel('Drop earrings') },
    { id: 'quill-drop-earrings', code: 'BC-717', cat: 'jewellery', type: 'Earrings', name: 'Quill Drop Earrings', desc: 'Teardrops of quilled bamboo slivers.', specs: jewel('Drop earrings') },
    { id: 'diagonal-quill-drop-earrings', code: 'BC-718', cat: 'jewellery', type: 'Earrings', name: 'Diagonal Quill Drop Earrings', desc: 'Layered quills set at an angle, so the drop catches the light differently on each side.', specs: jewel('Drop earrings') },
    { id: 'quill-leaf-earrings', code: 'BC-719', cat: 'jewellery', type: 'Earrings', name: 'Quill Leaf Earrings', desc: 'Leaf-shaped quilling, light enough for daily wear.', specs: jewel('Drop earrings') },
    { id: 'juhi-quill-drop-earrings', code: 'BC-720', cat: 'jewellery', type: 'Earrings', name: 'Juhi with Quill Drop Earrings', desc: 'A juhi star above a quilled teardrop.', specs: jewel('Drop earrings') },
    { id: 'single-flat-star-earrings', code: 'BC-721', cat: 'jewellery', type: 'Earrings', name: 'Single Flat Star Earrings', desc: 'One flat woven star. Minimal and very light.', specs: jewel('Drop earrings') },
    { id: 'double-layer-flat-star-earrings', code: 'BC-722', cat: 'jewellery', type: 'Earrings', name: 'Double Layer Flat Star Earrings', desc: 'Two flat stars, one above the other.', specs: jewel('Drop earrings') },
    { id: 'triple-layer-flat-star-earrings', code: 'BC-723', cat: 'jewellery', type: 'Earrings', name: 'Triple Layer Flat Star Earrings', desc: 'Three flat stars in a cascade.', specs: jewel('Drop earrings') },
    { id: 'bead-ring-earrings', code: 'BC-724', cat: 'jewellery', type: 'Earrings', name: 'Bead Ring Earrings', desc: 'A bamboo ring with a single knotted bead.', specs: jewel('Drop earrings') },
    { id: 'single-shell-earrings', code: 'BC-725', cat: 'jewellery', type: 'Earrings', name: 'Single Shell Earrings', desc: 'A single shell-shaped weave, minimal and light.', specs: jewel('Drop earrings') },
    { id: 'double-layer-shell-earrings', code: 'BC-726', cat: 'jewellery', type: 'Earrings', name: 'Double Layer Shell Earrings', desc: 'Two shell weaves, one below the other.', specs: jewel('Drop earrings') },
    { id: 'petal-earrings', code: 'BC-727', cat: 'jewellery', type: 'Earrings', name: 'Petal Earrings', desc: 'Looped bamboo petals in a playful drop.', specs: jewel('Drop earrings') },
    { id: 'droplets-with-bead-earrings', code: 'BC-728', cat: 'jewellery', type: 'Earrings', name: 'Droplets with Bead Earrings', desc: 'A teardrop loop finished with a knotted bamboo ball.', specs: jewel('Drop earrings') },
    { id: 'droplet-earrings', code: 'BC-729', cat: 'jewellery', type: 'Earrings', name: 'Droplet Earrings', desc: 'A plain teardrop of bamboo sliver. Goes with almost anything.', specs: jewel('Drop earrings') },
    { id: 'juhi-double-droplet-earrings', code: 'BC-730', cat: 'jewellery', type: 'Earrings', name: 'Juhi with Double Droplet Earrings', desc: 'A juhi star with two teardrops hanging below.', specs: jewel('Drop earrings') },
    { id: 'basket-earrings', code: 'BC-731', cat: 'jewellery', type: 'Earrings', name: 'Basket Earrings', desc: 'A fan-shaped weave, like a tiny basket.', specs: jewel('Drop earrings') },
    { id: 'fish-earrings', code: 'BC-732', cat: 'jewellery', type: 'Earrings', name: 'Fish Earrings', desc: 'A little fish woven in bamboo sliver.', specs: jewel('Drop earrings') },
    { id: 'fish-ring-earrings', code: 'BC-733', cat: 'jewellery', type: 'Earrings', name: 'Fish Ring Earrings', desc: 'A small fish set inside a bamboo ring.', specs: jewel('Drop earrings') },
    { id: 'zumaka-earrings', code: 'BC-734', cat: 'jewellery', type: 'Earrings', name: 'Zumaka', desc: 'Our take on the traditional jhumka, woven entirely in bamboo.', specs: jewel('Jhumka earrings') },
    { id: 'big-beads-earrings', code: 'BC-735', cat: 'jewellery', type: 'Earrings', name: 'Big Beads Earrings', desc: 'A single large bead, hand-knotted from bamboo sliver.', specs: jewel('Drop earrings') },
    { id: 'double-layer-beads-earrings', code: 'BC-736', cat: 'jewellery', type: 'Earrings', name: 'Double Layer Beads Earrings', desc: 'Two knotted beads on a short drop.', specs: jewel('Drop earrings') },
    { id: 'triple-layer-beads-earrings', code: 'BC-737', cat: 'jewellery', type: 'Earrings', name: 'Triple Layer Beads Earrings', desc: 'Three knotted beads on a long drop.', specs: jewel('Drop earrings') },
    { id: 'single-diamond-earrings', code: 'BC-738', cat: 'jewellery', type: 'Earrings', name: 'Single Diamond Earrings', desc: 'A woven diamond shape with a lovely texture up close.', specs: jewel('Drop earrings') },
    { id: 'double-layer-diamond-earrings', code: 'BC-739', cat: 'jewellery', type: 'Earrings', name: 'Double Layer Diamond Earrings', desc: 'Two woven diamonds, one beneath the other.', specs: jewel('Drop earrings') },
    { id: 'triple-layer-diamond-earrings', code: 'BC-740', cat: 'jewellery', type: 'Earrings', name: 'Triple Layer Diamond Earrings', desc: 'Three woven diamonds in a cascade.', specs: jewel('Drop earrings') },
    { id: 'juhiring-earrings', code: 'BC-741', cat: 'jewellery', type: 'Earrings', name: 'Juhiring Earrings', desc: 'A ring of bamboo sliver with a star at its centre.', specs: jewel('Drop earrings') },
    { id: 'double-layer-juhiring-earrings', code: 'BC-742', cat: 'jewellery', type: 'Earrings', name: 'Double Layer Juhiring Earrings', desc: 'Two star-in-ring motifs on one drop.', specs: jewel('Drop earrings') },
    { id: 'triple-layer-juhiring-earrings', code: 'BC-743', cat: 'jewellery', type: 'Earrings', name: 'Triple Layer Juhiring Earrings', desc: 'Three linked star rings. A statement pair.', specs: jewel('Drop earrings') },
    { id: 'oval-earrings', code: 'BC-744', cat: 'jewellery', type: 'Earrings', name: 'Oval Earrings', desc: 'Rounded ovals of quilled bamboo sliver.', specs: jewel('Drop earrings') },
    { id: 'jasmine-earrings', code: 'BC-745', cat: 'jewellery', type: 'Earrings', name: 'Jasmine Earrings', desc: 'A jasmine-flower weave that pairs with the Jasmine Necklace.', specs: jewel('Drop earrings') },
    { id: 'circle-earrings', code: 'BC-746', cat: 'jewellery', type: 'Earrings', name: 'Circle Earrings', desc: 'A simple, clean circle of bamboo sliver.', specs: jewel('Drop earrings') },
    { id: 'double-circle-earrings', code: 'BC-747', cat: 'jewellery', type: 'Earrings', name: 'Double Circle Earrings', desc: 'Two linked circles of bamboo sliver.', specs: jewel('Drop earrings') },
    { id: 'skylamp-earrings', code: 'BC-748', cat: 'jewellery', type: 'Earrings', name: 'Skylamp Earrings', desc: 'A cylindrical weave shaped like a tiny sky lantern.', specs: jewel('Drop earrings') },
    { id: 'bead-skylamp-earrings', code: 'BC-749', cat: 'jewellery', type: 'Earrings', name: 'Bead Skylamp Earrings', desc: 'A knotted bead above a small sky-lantern drop.', specs: jewel('Drop earrings') },
    { id: 'juhi-skylamp-earrings', code: 'BC-750', cat: 'jewellery', type: 'Earrings', name: 'Juhi Sky Lamp Earrings', desc: 'A juhi star paired with a sky-lantern drop.', specs: jewel('Drop earrings') },
    { id: 'candle-juhi-earrings', code: 'BC-751', cat: 'jewellery', type: 'Earrings', name: 'Candle Juhi Earrings', desc: 'A slim, candle-shaped drop topped with a juhi star.', specs: jewel('Drop earrings') },
    { id: 'juhi-triangle-earrings', code: 'BC-752', cat: 'jewellery', type: 'Earrings', name: 'Juhi Triangle Earrings', desc: 'A juhi star above a woven triangle.', specs: jewel('Drop earrings') },
    { id: 'juhi-juhiring-earrings', code: 'BC-753', cat: 'jewellery', type: 'Earrings', name: 'Juhi with Juhiring Earrings', desc: 'A juhi star above a star-in-ring.', specs: jewel('Drop earrings') },
    { id: 'sunflower-earrings', code: 'BC-754', cat: 'jewellery', type: 'Earrings', name: 'Sunflower Earrings', desc: 'A woven sunflower, bright and light.', specs: jewel('Drop earrings') },

    /* Festive */
    {
      id: 'handmade-rakhi', code: 'BC-801', cat: 'festive',
      name: 'Handmade Bamboo Rakhi',
      desc: 'Handmade bamboo rakhis, each with a wish card. Available in Mandala, Swastik and Om designs.',
      specs: { Material: 'Bamboo, handmade', Designs: 'Mandala, Swastik, Om', Includes: 'Wish card' }
    },
    {
      id: 'rakhi-combo-pack', code: 'BC-802', cat: 'festive',
      name: 'Bamboo Rakhi Combo Pack',
      desc: 'A handmade bamboo rakhi packed with a bamboo toothbrush in a round paper gift box.',
      specs: { Contents: 'Bamboo rakhi, bamboo toothbrush, wish card', Packaging: 'Round paper box' }
    }
  ];
})();
