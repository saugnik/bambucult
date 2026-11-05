/*
  BambuCult catalogue data.

  Photos are matched to products by code, not by name:
    images/products/BC-103.jpg      main photo
    images/products/BC-103-2.jpg    extra views (-2 up to -6), optional

  Fields
    id       used in the page address (product.html?p=id), keep it unique
    code     shown on the site and used for photo file names
    cat      category id (see BC_CATEGORIES)
    type     sub-type inside a category, used by the filter chips and menus
    unit     what buyers order in (pieces, packs, tubes, sq ft ...)
    alt      a short description of the photo, read out by screen readers
    engrave  true if you can laser-engrave a name or logo on it
    featured true to show it on the home page
    hidden   true while the product has no photo, so it stays off the site
*/

window.BC_CATEGORIES = [
  {
    id: 'oral',
    name: 'Bamboo Oral Products',
    types: ['Adult brushes', 'Kids’ brushes', 'Toothpaste'],
    cover: 'BC-103',
    blurb: 'Bamboo toothbrushes for adults and children, and toothpaste, tablets and tooth powder to go with them.',
    buyers: 'Hotels and homestays, dental clinics, pharmacies, retail and zero-waste stores'
  },
  {
    id: 'craft',
    name: 'Bamboo Craft',
    types: ['Desk & office', 'Home & decor', 'Kitchen & drinkware'],
    cover: 'BC-310',
    blurb: 'Desk pieces, home decor and drinkware in bamboo: organisers, a table clock and desk calendar, a phone speaker that needs no power, chimes, diya holders, baskets and tumblers. Many can carry your logo.',
    buyers: 'HR and admin teams, gifting companies, hotels and resorts, gift and home stores'
  },
  {
    id: 'gifts',
    name: 'Bamboo Gifts',
    types: ['Gift sets'],
    cover: 'BC-402',
    blurb: 'Five ready-made sets put together from pieces in this catalogue: desk, drinkware, bathroom, grooming and Diwali. Contents can be swapped, and the box can carry your logo or message.',
    buyers: 'HR and admin teams, gifting companies, event organisers, hotels, gift shops'
  },
  {
    id: 'construction',
    name: 'Bamboo Constructions',
    types: ['Poles & slats', 'Boards & panels', 'Flooring & roofing'],
    cover: 'BC-501',
    blurb: 'Bamboo as a building material, supplied in bulk: treated poles, split bamboo and slats, mat boards, wall panels, fencing screens, strand-woven flooring and roofing sheets. Sizes and treatment are agreed for each project.',
    buyers: 'Architects, interior designers, builders and contractors, resorts, landscapers'
  },
  {
    id: 'care',
    name: 'Bamboo Care',
    types: ['Shaving', 'Personal care'],
    cover: 'BC-204',
    blurb: 'Bamboo and wheat-straw razors, a shaving brush and gel, a hair brush and comb, cotton buds, makeup brushes and a soap case. The everyday bathroom shelf, mostly in bamboo.',
    buyers: 'Salons and barbershops, hotels, gift-box makers, retail stores'
  }
];

window.BC_PRODUCTS = [
  /* Bamboo Oral Products */
  {
    id: 'toothbrush-charcoal-adult-soft', code: 'BC-101', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true,
    name: 'Bamboo Toothbrush Charcoal Adult – Soft',
    desc: 'Soft, charcoal-infused bristles set in a smooth bamboo handle. A good everyday brush for adults with sensitive gums. Sold singly, in a paper carton.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Charcoal-infused, soft, BPA-free', Pack: '1 brush', Packaging: 'Biodegradable paper' },
    alt: 'Bamboo toothbrush with black charcoal bristles standing in a cut-crystal glass, beside a small jar of white tablets and a glass container with a metal lid on a white basin'
  },
  {
    id: 'toothbrush-charcoal-adult-soft-pack-2', code: 'BC-102', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Charcoal Adult – Soft (Pack of 2)',
    desc: 'The soft charcoal brush, two to a pack. Handy for couples, guest rooms and combo shelves.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Charcoal-infused, soft, BPA-free', Pack: '2 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-charcoal-adult-soft-pack-4', code: 'BC-103', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, featured: true,
    name: 'Bamboo Toothbrush Charcoal Adult – Soft (Pack of 4)',
    desc: 'The soft charcoal adult brush, four to a pack. At the usual change every three months, that is a year of brushing for one person.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Charcoal-infused, soft, BPA-free', Pack: '4 brushes', Packaging: 'Biodegradable paper' },
    alt: 'Three bamboo toothbrushes with green, white and natural bristles beside a kraft paper box on a white surface'
  },
  {
    id: 'toothbrush-charcoal-adult-soft-tongue-cleaner-holder', code: 'BC-104', cat: 'oral', type: 'Adult brushes', unit: 'sets', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Charcoal Adult – Soft with Tongue Cleaner & Holder',
    desc: 'A complete set: the soft charcoal brush, a bamboo tongue cleaner and a bamboo holder to stand them in. Works as a bathroom gift or a step up in hotel amenities.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Charcoal-infused, soft, BPA-free', Pack: '1 brush, 1 tongue cleaner, 1 holder', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-charcoal-neem-adult', code: 'BC-105', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Charcoal Neem Adult',
    desc: 'Bristles infused with charcoal and neem, on a bamboo handle. For buyers who want the familiar neem angle on a modern brush.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Charcoal and neem infused, BPA-free', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-standard-adult-medium', code: 'BC-106', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Standard Adult – Medium',
    desc: 'A straightforward bamboo brush with medium white bristles, for people who find soft bristles too gentle.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Medium, BPA-free', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-standard-adult-medium-pack-2', code: 'BC-107', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Standard Adult – Medium (Pack of 2)',
    desc: 'The standard medium brush, two to a pack.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Medium, BPA-free', Pack: '2 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-standard-adult-medium-pack-4', code: 'BC-108', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Standard Adult – Medium Bristles (Pack of 4)',
    desc: 'The standard medium brush in a pack of four: a year’s supply for one person, or one each for a family.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Medium, BPA-free', Pack: '4 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-natural-adult', code: 'BC-109', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true,
    name: 'Bamboo Toothbrush Natural Adult',
    desc: 'A bamboo handle left close to its natural finish, with BPA-free bristles. Simple and light, with nothing plastic on the outside.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'BPA-free', Pack: '1 brush', Packaging: 'Biodegradable paper' },
    alt: 'Close-up of a bamboo toothbrush head with natural cream bristles on a white surface, with a second brush out of focus beside it'
  },
  {
    id: 'toothbrush-natural-adult-pack-4', code: 'BC-110', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Natural Adult (Pack of 4)',
    desc: 'Four natural-finish adult brushes in one pack.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'BPA-free', Pack: '4 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-natural-pack-4', code: 'BC-111', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Natural – Pack of 4',
    desc: 'Four soft-bristle brushes on natural bamboo handles. Gentle enough for daily use, and the handle can be composted once the bristles are pulled out.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Soft, BPA-free', Pack: '4 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-nano-white-flat-handle', code: 'BC-112', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Nano White – Flat Handle',
    desc: 'Ultra-fine “nano” white bristles on a flat bamboo handle. The thinner filaments feel very soft along the gumline.',
    specs: { Handle: 'Flat bamboo handle, biodegradable', Bristles: 'Nano, ultra-fine, white', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-nano-white-ultra-soft-round-handle', code: 'BC-113', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Nano White Ultra Soft – Round Handle',
    desc: 'The nano white brush with a rounded handle that sits comfortably in the hand. Ultra soft, for people who brush hard or have sensitive gums.',
    specs: { Handle: 'Round bamboo handle, biodegradable', Bristles: 'Nano, ultra soft, white', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-nano-white-round-handle-pack-4', code: 'BC-114', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Nano White – Round Handle (Pack of 4)',
    desc: 'The round-handle nano white brush, four to a pack.',
    specs: { Handle: 'Round bamboo handle, biodegradable', Bristles: 'Nano, ultra soft, white', Pack: '4 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-pack-2-with-tongue-cleaner', code: 'BC-115', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush (Pack of 2) with Tongue Cleaner',
    desc: 'Two brushes, one white medium and one charcoal soft, plus a bamboo tongue cleaner. A neat starter set for someone moving off plastic.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: '1 white medium, 1 charcoal soft', Pack: '2 brushes, 1 tongue cleaner', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'executive-toothbrush-with-holder', code: 'BC-116', cat: 'oral', type: 'Adult brushes', unit: 'sets', engrave: true, featured: true,
    name: 'Bamboo Executive Toothbrush with Holder (Combo Pack)',
    desc: 'A full-size bamboo brush paired with a bamboo stand. Looks at home on a hotel vanity or in a corporate welcome kit.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'BPA-free', Pack: '1 brush, 1 holder', Packaging: 'Biodegradable paper' },
    alt: 'Wooden toothbrush standing in a frosted glass cup on a wooden vanity tray, with a round bath brush, a safety razor on a marble dish and a glass bowl'
  },
  {
    id: 'travel-toothbrush-white-soft', code: 'BC-117', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Travel Toothbrush White Soft Brush',
    desc: 'A compact bamboo travel brush with soft white bristles that packs away neatly. Made for washbags, gym kits and overnight amenity sets.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Soft, white, BPA-free', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'denture-toothbrush-adult', code: 'BC-118', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Denture Toothbrush Adult',
    desc: 'A dual-head brush for dentures: firm bristles for the plate, and a smaller head for clasps and corners. Bamboo handle with an easy grip.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Firm, dual head', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-zodiac-pack-12', code: 'BC-119', cat: 'oral', type: 'Adult brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush – Zodiac – Pack of 12 Brushes',
    desc: 'Twelve brushes, one for each sign of the zodiac. Fun as a family set, and even better as a counter display in a store.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Charcoal-infused, BPA-free', Pack: '12 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-dino', code: 'BC-120', cat: 'oral', type: 'Adult brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Dino – Bamboo Toothbrush',
    desc: 'A bamboo brush from the Dino range, with medium BPA-free bristles. Ask us about the handle designs currently available.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Medium, BPA-free', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-family-pack-4', code: 'BC-121', cat: 'oral', type: ['Adult brushes', 'Kids’ brushes'], unit: 'packs', engrave: true,
    name: 'Bamboo Toothbrush Family Pack – Adult + Kids (Pack of 4)',
    desc: 'Two adult and two kids’ brushes, all soft-bristled, in one pack. One box covers a family of four.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Soft, BPA-free', Pack: '2 adult brushes, 2 kids’ brushes', Packaging: 'Biodegradable paper' },
    alt: 'Two wooden toothbrushes with natural bristles and a miswak stick on a white surface, below a sprig of dried leaves and small cream berries'
  },
  {
    id: 'toothbrush-charcoal-kids', code: 'BC-122', cat: 'oral', type: 'Kids’ brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Charcoal Kids',
    desc: 'A smaller head and shorter handle sized for children, with soft charcoal-infused bristles.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Charcoal-infused, soft, BPA-free', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-charcoal-kids-pack-2', code: 'BC-123', cat: 'oral', type: 'Kids’ brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Charcoal Kids (Pack of 2)',
    desc: 'The kids’ charcoal brush, two to a pack.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Charcoal-infused, soft, BPA-free', Pack: '2 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-natural-kids', code: 'BC-124', cat: 'oral', type: 'Kids’ brushes', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Natural Kids',
    desc: 'A child-sized bamboo brush with soft, BPA-free bristles. Light, smooth and easy for small hands to hold.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Soft, BPA-free', Pack: '1 brush', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothbrush-natural-kids-pack-2', code: 'BC-125', cat: 'oral', type: 'Kids’ brushes', unit: 'packs', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Natural Kids (Pack of 2)',
    desc: 'The natural kids’ brush, two to a pack.',
    specs: { Handle: 'Natural bamboo, biodegradable', Bristles: 'Soft, BPA-free', Pack: '2 brushes', Packaging: 'Biodegradable paper' }
  },
  {
    id: 'toothpaste-charcoal', code: 'BC-126', cat: 'oral', type: 'Toothpaste', unit: 'tubes',
    name: 'Activated Charcoal Toothpaste',
    desc: 'Toothpaste made with activated charcoal. Stock it beside our charcoal bamboo toothbrushes, or pack the two together in gift boxes and hotel amenity kits. Tube sizes on request.',
    specs: { Contains: 'Activated charcoal', Pack: 'Tube', Sizes: 'On request', 'Pairs with': 'Charcoal bamboo toothbrushes' },
    alt: 'Black-and-white close-up of a toothbrush with toothpaste on its bristles'
  },
  {
    id: 'toothpaste-neem-clove', code: 'BC-127', cat: 'oral', type: 'Toothpaste', unit: 'tubes',
    name: 'Herbal Neem & Clove Toothpaste',
    desc: 'A herbal toothpaste made with neem and clove, both familiar names in India. It goes with the charcoal neem bamboo toothbrush on a pharmacy shelf or in a combo pack.',
    specs: { Contains: 'Neem and clove', Pack: 'Tube', Sizes: 'On request', 'Pairs with': 'Charcoal neem bamboo toothbrush' },
    alt: 'Green gel toothpaste on a toothbrush with white bristles'
  },
  {
    id: 'toothpaste-kids', code: 'BC-128', cat: 'oral', type: 'Toothpaste', unit: 'tubes',
    name: 'Kids’ Toothpaste',
    desc: 'A toothpaste made for children. Sell it on its own, or pack it with our kids’ bamboo toothbrushes in family packs and dental-clinic giveaways. Flavour and tube sizes on request.',
    specs: { Flavour: 'On request', Pack: 'Tube', Sizes: 'On request', 'Pairs with': 'Kids’ bamboo toothbrushes' },
    alt: 'Toothbrush with pink and white toothpaste on a white bathroom sink'
  },
  {
    id: 'toothpaste-tablets', code: 'BC-129', cat: 'oral', type: 'Toothpaste', unit: 'jars', featured: true,
    name: 'Toothpaste Tablets – Mint',
    desc: 'Mint toothpaste pressed into tablets and packed in a jar. Chew one, then brush with a wet toothbrush. With no tube to throw away and nothing to leak, they suit zero-waste stores and travel kits.',
    specs: { Flavour: 'Mint', Pack: 'Jar', Contents: 'Tablet count on request', Use: 'Chew one tablet, then brush with a wet toothbrush' },
    alt: 'Glass jar of white tablets beside a wooden toothbrush and scattered dried petals'
  },
  {
    id: 'tooth-powder', code: 'BC-130', cat: 'oral', type: 'Toothpaste', unit: 'jars',
    name: 'Herbal Tooth Powder',
    desc: 'Herbal tooth powder, or manjan, packed in a jar. Sprinkle a pinch on a wet toothbrush and brush as usual. For customers who prefer powder to paste, and shops with a traditional oral-care shelf.',
    specs: { Form: 'Powder', Pack: 'Jar', Sizes: 'On request', Use: 'A pinch on a wet toothbrush' },
    alt: 'Spoons of herbal powder beside fresh ginger root'
  },
  {
    id: 'tongue-brush', code: 'BC-131', cat: 'oral', type: 'Accessories', unit: 'pieces', hidden: true,
    name: 'Bamboo Tongue Brush',
    desc: 'A bamboo tongue brush with a textured head that lifts residue from the tongue. Pairs naturally with any of our toothbrushes.',
    specs: { Material: 'Bamboo handle', Pack: '1 piece' }
  },
  {
    id: 'tongue-cleaner', code: 'BC-132', cat: 'oral', type: 'Accessories', unit: 'pieces', hidden: true,
    name: 'Bamboo Tongue Cleaner',
    desc: 'A simple curved tongue cleaner in natural bamboo. One gentle pass from back to front each morning is all it takes.',
    specs: { Material: 'Bamboo', Pack: '1 piece' }
  },
  {
    id: 'interdental-brushes-pack-4', code: 'BC-133', cat: 'oral', type: 'Accessories', unit: 'packs', hidden: true,
    name: 'Bamboo Interdental Brushes (4 Pack)',
    desc: 'Small bamboo-handled brushes for the gaps between teeth that a toothbrush misses. Four in a pack.',
    specs: { Handle: 'Bamboo', Pack: '4 brushes' }
  },
  {
    id: 'toothbrush-case', code: 'BC-134', cat: 'oral', type: 'Accessories', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Case',
    desc: 'A smooth bamboo tube that holds a single toothbrush. For travel bags and gym kits, and nice enough to give as a gift.',
    specs: { Material: 'Bamboo', Fits: 'One standard toothbrush' }
  },
  {
    id: 'toothbrush-case-with-charcoal-brush', code: 'BC-135', cat: 'oral', type: 'Accessories', unit: 'sets', engrave: true, hidden: true,
    name: 'Bamboo Toothbrush Case with Flat Handle Charcoal Brush',
    desc: 'The bamboo travel tube with a flat-handle charcoal brush inside. Ready to gift as it is.',
    specs: { Material: 'Bamboo', Contents: '1 bamboo case, 1 flat-handle charcoal toothbrush' }
  },
  {
    id: 'toothbrush-holder', code: 'BC-136', cat: 'oral', type: 'Accessories', unit: 'pieces', hidden: true,
    name: 'Bamboo Toothbrush Holder',
    desc: 'A handcrafted bamboo stand for your toothbrushes. Toothbrushes are not included.',
    specs: { Material: 'Bamboo, handcrafted', Pack: '1 holder' }
  },
  /* Bamboo Care */
  {
    id: 'shaving-razor-natural', code: 'BC-201', cat: 'care', type: 'Shaving', unit: 'pieces', engrave: true,
    name: 'Bamboo Natural Shaving Razor',
    desc: 'A bamboo-handled razor with a triple stainless-steel blade and a replaceable head. Change the head, keep the handle.',
    specs: { Handle: 'Natural bamboo', Blade: 'Triple stainless steel, replaceable head' },
    alt: 'Wooden-handled straight razor, safety razor, shaving brush and scissors laid out on a wooden table'
  },
  {
    id: 'shaving-razor-pack-2-with-gel', code: 'BC-202', cat: 'care', type: 'Shaving', unit: 'packs',
    name: 'Bamboo Shaving Razor – Pack of 2 with Shaving Gel',
    desc: 'Two handmade bamboo safety razors and a shaving gel. Only the blade is ever replaced; the handle lasts. For men and women.',
    specs: { Handle: 'Handmade bamboo, ergonomic grip', Pack: '2 razors, 1 shaving gel' },
    alt: 'Cartridge razor and shaving brush on a chrome stand beside a round mirror and an open shaving bowl'
  },
  {
    id: 'wheat-straw-shaver', code: 'BC-203', cat: 'care', type: 'Shaving', unit: 'pieces',
    name: 'Wheat Straw Shaver',
    desc: 'A razor with a wheat-straw composite handle, for a grooming shelf next to our bamboo razors or for travel and hotel amenity kits. Blade details on request.',
    specs: { Handle: 'Wheat-straw composite', Blade: 'Details on request', Pack: '1 razor' },
    alt: 'Safety razor with a light metal handle leaning against a cream shaving brush on a dark surface'
  },
  {
    id: 'shaving-brush', code: 'BC-204', cat: 'care', type: 'Shaving', unit: 'pieces', engrave: true, featured: true,
    name: 'Bamboo Shaving Brush',
    desc: 'A bamboo-handled brush for working up a lather from shaving soap or cream. For barbershops and grooming gift sets, including our Bamboo Grooming Kit. Bristle type on request.',
    specs: { Handle: 'Bamboo', Bristles: 'On request', Use: 'Shaving soap or cream', Pack: '1 brush' },
    alt: 'Shaving brush with natural bristles and a cream handle against a dark, warm background'
  },
  {
    id: 'shaving-gel', code: 'BC-205', cat: 'care', type: 'Shaving', unit: 'tubes',
    name: 'Shaving Gel',
    desc: 'Shaving gel for wet shaving with our bamboo razors or any other blade razor. It is sold on its own, so shops can restock gel without reordering razors. Tube sizes on request.',
    specs: { Use: 'Wet shaving', Suits: 'Any blade razor, including our bamboo razors', Pack: 'Tube', Sizes: 'On request' },
    alt: 'Wooden shaving bowl with lid holding white shaving soap, with a shaving brush and safety razor'
  },
  {
    id: 'hair-brush', code: 'BC-206', cat: 'care', type: 'Personal care', unit: 'pieces', engrave: true,
    name: 'Bamboo Hair Brush',
    desc: 'A hair brush with a bamboo handle and head. Sell it beside the bamboo pocket comb on a salon counter, or pack it into grooming gift boxes. Shape and pin type on request.',
    specs: { Body: 'Bamboo', Shape: 'On request', Pins: 'On request', Pack: '1 brush' },
    alt: 'Wooden paddle hair brush with metal pins on a white background'
  },
  {
    id: 'pocket-hair-comb', code: 'BC-207', cat: 'care', type: 'Personal care', unit: 'pieces',
    name: 'Bamboo Pocket Hair Comb',
    desc: 'A pocket-sized comb cut from natural bamboo, with smooth, rounded teeth that glide through hair.',
    specs: { Material: 'Natural bamboo', Size: '130 × 30 × 5 mm' },
    alt: 'Close-up of the end of a wooden comb on a textured beige surface'
  },
  {
    id: 'cotton-buds-100', code: 'BC-208', cat: 'care', type: 'Personal care', unit: 'boxes',
    name: 'Bamboo Cotton Buds (100 Sticks)',
    desc: 'Bamboo sticks with soft cotton tips, 100 to a box. The stick and the tip are both biodegradable.',
    specs: { Stick: 'Bamboo', Tip: 'Cotton', Pack: '100 buds' },
    alt: 'Close-up of white cotton swabs against a black background'
  },
  {
    id: 'makeup-brush-set-with-pouch', code: 'BC-209', cat: 'care', type: 'Personal care', unit: 'sets',
    name: 'Bamboo Makeup Brush Set with Pouch',
    desc: 'Eleven makeup brushes with bamboo handles and very soft bristles, in a pouch that keeps them together. A good-looking gift set.',
    specs: { Handles: 'Bamboo', Pack: '11 brushes and a storage pouch' },
    alt: 'Makeup brushes with dark handles arranged in a black roll-up pouch'
  },
  {
    id: 'soap-case', code: 'BC-210', cat: 'care', type: 'Personal care', unit: 'pieces', featured: true,
    name: 'Bamboo Soap Case',
    desc: 'A bamboo soap dish that lets water drain away so the bar stays dry. Water-resistant finish, easy to rinse clean.',
    specs: { Material: 'Bamboo, water-resistant finish', Size: 'Approx. 11.6 × 8 × 1.3 cm' },
    alt: 'Bar of soap in a wooden soap dish on a wooden board with a towel and a wooden nail brush'
  },
  {
    id: 'travel-kit', code: 'BC-211', cat: 'care', type: 'Personal care', unit: 'kits', hidden: true,
    name: 'Bamboo Travel Kit',
    desc: 'Everything for a plastic-free overnight bag, apart from the brush bristles: a toothbrush, cotton buds, a comb, a tongue cleaner, a straw and a straw cleaner.',
    specs: { Contents: 'Toothbrush, 4 cotton buds, comb (14 × 3 × 0.5 cm), tongue cleaner, straw, straw cleaner' }
  },
  {
    id: 'green-box', code: 'BC-212', cat: 'care', type: 'Personal care', unit: 'kits',
    name: 'Bamboo Green Box',
    desc: 'A small kit for brushing and eating on the go. Easy to carry, easy to store, and an easy gift.',
    specs: { Contents: 'Toothbrush, fork, spoon, knife, straw, straw cleaner' },
    alt: 'Stainless steel cutlery standing in a bamboo box'
  },
  {
    id: 'b-safe-key', code: 'BC-213', cat: 'care', type: 'Personal care', unit: 'pieces', engrave: true,
    name: 'Bamboo B-Safe Key',
    desc: 'A pocket-sized bamboo tool for pressing lift buttons, opening doors and using keypads without touching them. It also works as a small phone holder.',
    specs: { Material: 'Bamboo, water-resistant finish', Weight: 'Lightweight, fits a keyring or pocket' },
    alt: 'Bunch of keys on a ring with a carved wooden maple-leaf keychain on a dark wooden table'
  },
  /* Bamboo Craft */
  {
    id: 'desk-organizer', code: 'BC-301', cat: 'craft', type: 'Desk & office', unit: 'pieces',
    name: 'Bamboo Desk Organiser',
    desc: 'A pen and stationery holder handcrafted from bamboo stems. Gives a desk a bit of warmth. Stationery not included.',
    specs: { Material: 'Bamboo stems, handcrafted' },
    alt: 'Two dark wooden pens standing in a rustic oak block pen holder against a dark grey background'
  },
  {
    id: 'mobile-desk-organiser', code: 'BC-302', cat: 'craft', type: 'Desk & office', unit: 'pieces',
    name: 'Bamboo Mobile & Desk Organiser',
    desc: 'Pens in one section, phone in the other. A compact bamboo organiser that tidies a desk without taking it over.',
    specs: { Material: 'Bamboo, handcrafted', Holds: 'Phone, pens and small stationery' },
    alt: 'Bamboo desk stand holding an open weekly planner with a blue pen'
  },
  {
    id: 'mobile-stand', code: 'BC-303', cat: 'craft', type: 'Desk & office', unit: 'pieces',
    name: 'Bamboo Mobile Stand',
    desc: 'A handcrafted bamboo stand that holds a phone upright on the desk, for video calls, recipes, or just keeping it off the table.',
    specs: { Material: 'Bamboo, handcrafted', Note: 'Phone not included' },
    alt: 'Wooden phone stand with reading glasses resting on its ledge, on a wooden desk beside a laptop'
  },
  {
    id: 'speaker-classic', code: 'BC-304', cat: 'craft', type: 'Desk & office', unit: 'pieces', hidden: true,
    name: 'Bamboo Speaker – Classic',
    desc: 'A passive speaker made from bamboo and rattan. Slot your phone in and the shape amplifies the sound. No battery, no charging, no Bluetooth pairing.',
    specs: { Material: 'Bamboo and rattan, handmade', Power: 'None needed (passive amplifier)' }
  },
  {
    id: 'mobile-speaker-mini', code: 'BC-305', cat: 'craft', type: 'Desk & office', unit: 'pieces',
    name: 'Bamboo Mobile Speaker – Mini',
    desc: 'A smaller passive speaker cut from a bamboo section. It holds the phone upright and carries the sound further. No power needed.',
    specs: { Material: 'Bamboo, handcrafted', Power: 'None needed (passive amplifier)', Note: 'Phone not included' },
    alt: 'Rectangular plywood mini speaker with a black fabric grille, angled on a white surface'
  },
  {
    id: 'mobile-speaker-mini-pack-2', code: 'BC-306', cat: 'craft', type: 'Desk & office', unit: 'packs', hidden: true,
    name: 'Bamboo Mobile Speaker – Mini (Pack of 2)',
    desc: 'The mini bamboo speaker, two to a pack.',
    specs: { Material: 'Bamboo, handcrafted', Pack: '2 speakers', Power: 'None needed (passive amplifier)' }
  },
  {
    id: 'table-clock', code: 'BC-307', cat: 'craft', type: 'Desk & office', unit: 'pieces', engrave: true, featured: true,
    name: 'Bamboo Table Clock',
    desc: 'A bamboo clock that stands on a desk, shelf or reception counter. Engraved with a name or logo, it works as a desk gift for staff or clients. Display type and size on request.',
    specs: { Material: 'Bamboo', Display: 'On request', Size: 'On request', Use: 'Office desks, reception counters, desk gift sets' },
    alt: 'Wooden table clock with a round white face on a curved wooden stand'
  },
  {
    id: 'desk-calendar', code: 'BC-308', cat: 'craft', type: 'Desk & office', unit: 'pieces', engrave: true,
    name: 'Bamboo Desk Calendar',
    desc: 'Printed calendar cards in a bamboo stand. The cards can carry your logo and artwork, and the stand can be engraved. Ask us about refill cards for the following year.',
    specs: { Stand: 'Bamboo', Cards: 'Printed; your logo and artwork on request', Use: 'Office desks, client gifts, year-end gifting' },
    alt: 'Spiral-bound photo calendar on white fur with small wooden stars'
  },
  {
    id: 'key-chain', code: 'BC-309', cat: 'craft', type: 'Desk & office', unit: 'pieces', engrave: true,
    name: 'Bamboo Key Chain',
    desc: 'A small bamboo tag on a metal key ring. With a name or logo engraved on the tag, it suits event giveaways, staff gifts and room keys at hotels and homestays.',
    specs: { Material: 'Bamboo tag, metal key ring', Pack: '1 piece', Use: 'Event giveaways, staff gifts, hotel room keys' },
    alt: 'Turned wooden keychains in red, yellow and purple woods with gold and silver split rings on a wooden board'
  },
  {
    id: 'door-bell-round', code: 'BC-310', cat: 'craft', type: 'Home & decor', unit: 'pieces', featured: true,
    name: 'Japanese Style Bamboo Door Bell – Round Shape',
    desc: 'A Japanese-style bamboo chime with a round top. Hang it by the door and it rings softly in the breeze or whenever the door opens.',
    specs: { Material: 'Bamboo', Use: 'Doorways, windows, balconies' },
    alt: 'Bamboo wind chime with a round coconut-shell top hanging in front of a beige textured wall'
  },
  {
    id: 'door-bell-sparrow', code: 'BC-311', cat: 'craft', type: 'Home & decor', unit: 'pieces',
    name: 'Japanese Style Bamboo Door Bell – Sparrow Shape',
    desc: 'The same bamboo door chime, with a little sparrow at the top.',
    specs: { Material: 'Bamboo', Use: 'Doorways, windows, balconies' },
    alt: 'Dark metal wind bell with a fish-shaped wind catcher hanging from a tree branch'
  },
  {
    id: 'fridge-magnet-bottle-opener', code: 'BC-312', cat: 'craft', type: 'Home & decor', unit: 'pieces', engrave: true,
    name: 'Bamboo Fridge Magnet and Bottle Opener',
    desc: 'A round bamboo fridge magnet with a bottle opener built in. At 60 mm across, there is plenty of room for a name or logo.',
    specs: { Material: 'Bamboo', Size: '60 mm diameter × 10 mm' },
    alt: 'Cap opener with a pale knotty wooden handle lying among wood shavings on a workbench'
  },
  {
    id: 'tealight-holder', code: 'BC-313', cat: 'craft', type: 'Home & decor', unit: 'pieces', engrave: true,
    name: 'Bamboo Tealight Holder',
    desc: 'Set a few of these bamboo holders along a dining table or reception counter, or pack them into festive hampers. They take standard tealights in their cups.',
    specs: { Material: 'Bamboo', Fits: 'Standard tealights in their cups', Care: 'Never leave a lit candle unattended' },
    alt: 'Lit tealight in a star-shaped wooden holder, with pine cones and dried orange slices on a wooden table'
  },
  {
    id: 'diya-holder', code: 'BC-314', cat: 'craft', type: 'Home & decor', unit: 'pieces', engrave: true,
    name: 'Bamboo Diya Holder',
    desc: 'Holds clay diyas on Diwali tables, puja corners and shop counters in the festive season. Made of bamboo; sizes on request.',
    specs: { Material: 'Bamboo', Holds: 'Clay diyas; the number depends on size', Sizes: 'On request', Care: 'Never leave lit diyas unattended' },
    alt: 'Lit clay diya surrounded by orange marigold flowers on a pale floor'
  },
  {
    id: 'coaster-set', code: 'BC-315', cat: 'craft', type: 'Home & decor', unit: 'sets', engrave: true,
    name: 'Bamboo Coaster Set',
    desc: 'Flat bamboo coasters for cups and glasses, sold as a set. Each one can be engraved with a name or logo for cafés, hotel rooms and gift boxes. Pack size on request.',
    specs: { Material: 'Bamboo', Pack: 'On request', Care: 'Wipe clean; do not soak' },
    alt: 'Rows of round coiled bamboo and rattan woven discs'
  },
  {
    id: 'handwoven-basket', code: 'BC-316', cat: 'craft', type: 'Home & decor', unit: 'pieces',
    name: 'Handwoven Bamboo Basket',
    desc: 'A basket woven by hand from split bamboo. Use it as the base of a gift hamper, or for storage and display in shops, homes and hotel rooms. Sizes on request.',
    specs: { Material: 'Split bamboo, woven by hand', Sizes: 'On request', Use: 'Gift hampers, storage, display', Note: 'Handmade, so small variations between pieces are normal' },
    alt: 'Handwoven wicker basket with a braided rim and a single handle on a white background'
  },
  {
    id: 'thermos-coffee-mug', code: 'BC-317', cat: 'craft', type: 'Kitchen & drinkware', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Thermos Coffee Mug',
    desc: 'An insulated 12 oz mug with a bamboo outer and a 304 stainless-steel inside. Hot drinks stay hot, cold ones stay cold, and a logo engraves cleanly on the bamboo.',
    specs: { Capacity: '12 oz (about 350 ml)', Body: 'Bamboo outer, 304 stainless-steel inner', Use: 'Coffee, tea, infused water' }
  },
  {
    id: 'insulated-water-bottle-450ml', code: 'BC-318', cat: 'craft', type: 'Kitchen & drinkware', unit: 'pieces', engrave: true, hidden: true,
    name: 'Bamboo Insulated Water Bottle – 450 ml',
    desc: 'A bamboo and stainless-steel bottle that holds 450 ml. Sturdy enough for the daily commute, and an easy one to put a logo on.',
    specs: { Capacity: '450 ml', Body: 'Bamboo and stainless steel' }
  },
  {
    id: 'travel-tumbler', code: 'BC-319', cat: 'craft', type: 'Kitchen & drinkware', unit: 'pieces', engrave: true,
    name: 'Bamboo Travel Tumbler',
    desc: 'A travel tumbler with a bamboo outer, a stainless-steel inner and a lid, for coffee, tea or water on the commute. Like our thermos mug, it takes an engraved logo on the bamboo. Capacity on request.',
    specs: { Body: 'Bamboo outer, stainless-steel inner', Capacity: 'On request', Use: 'Coffee, tea and water on the go' },
    alt: 'Cream reusable travel cup with lid and sleeve next to a loofah sponge and a round soap bar'
  },
  {
    id: 'lunch-box', code: 'BC-320', cat: 'craft', type: 'Kitchen & drinkware', unit: 'pieces', engrave: true,
    name: 'Bamboo Lunch Box',
    desc: 'A lunch box with a bamboo lid, for office lunches and school tiffins. The lid can be engraved with a name or logo. Container material and sizes on request.',
    specs: { Lid: 'Bamboo', Container: 'Stainless steel or glass, on request', Sizes: 'On request', Care: 'Hand-wash the lid; do not soak' },
    alt: 'Two bento boxes of Japanese food with their lids and chopsticks on a dark surface'
  },
  {
    id: 'straws-pack-4-with-cleaner', code: 'BC-321', cat: 'craft', type: 'Kitchen & drinkware', unit: 'packs',
    name: 'Bamboo Natural Straws (Pack of 4) with Cleaner',
    desc: 'Four reusable straws cut from natural bamboo stems, with a brush to clean them. Each one differs slightly in colour and thickness. That is the plant, not a defect.',
    specs: { Material: 'Natural bamboo stem', Pack: '4 straws, 1 cleaning brush' },
    alt: 'Red fruit drink topped with mint leaves and two natural straws against a purple background'
  },
  /* Bamboo Gifts */
  {
    id: 'gift-desk-set', code: 'BC-401', cat: 'gifts', type: 'Gift sets', unit: 'sets', engrave: true,
    name: 'Bamboo Desk Essentials Set',
    desc: 'Three bamboo pieces for a working desk: our desk organiser, mobile stand and table clock. Swap a piece for another from Bamboo Craft if you prefer. The clock can be engraved, and the box or sleeve can carry your logo or message.',
    specs: { Contents: 'Bamboo desk organiser, bamboo mobile stand, bamboo table clock', Packaging: 'Gift box or sleeve; message card on request', Personalisation: 'Engraving on the clock; your logo or message on the box or sleeve', Use: 'Joining kits, client gifts, year-end gifting' },
    alt: 'Wooden box of letter stamps and a slatted wooden pen holder with brushes on a light pine desk beside a white mug'
  },
  {
    id: 'gift-drinkware-set', code: 'BC-402', cat: 'gifts', type: 'Gift sets', unit: 'sets', engrave: true, featured: true,
    name: 'Bamboo Drinkware Set',
    desc: 'The 450 ml insulated bamboo bottle from Bamboo Craft and two bamboo travel tumblers, boxed together. The thermos mug can take the place of a tumbler. Each piece can be engraved on the bamboo, and the box or sleeve can carry your logo or message.',
    specs: { Contents: 'Bamboo insulated water bottle (450 ml), 2 bamboo travel tumblers', Packaging: 'Gift box or sleeve; message card on request', Personalisation: 'Engraving on the bamboo; your logo or message on the box or sleeve', Use: 'Client gifts, staff rewards, festive gifting' },
    alt: 'Six turned wooden tumblers with stainless steel liners grouped together on a light background'
  },
  {
    id: 'gift-zero-waste-bath', code: 'BC-403', cat: 'gifts', type: 'Gift sets', unit: 'kits', engrave: true,
    name: 'Bamboo Bathroom Kit',
    desc: 'A bamboo toothbrush, tongue cleaner and soap case with bamboo cotton buds, packed as one kit for guest rooms, wellness gifts and gift shops. Contents can be changed to suit the order, and the toothbrush handle can be engraved.',
    specs: { Contents: 'Bamboo toothbrush, bamboo tongue cleaner, bamboo soap case, bamboo cotton buds', Packaging: 'Gift box or sleeve; message card on request', Personalisation: 'Engraving on the toothbrush handle; your logo or message on the box or sleeve', Use: 'Hotel and homestay rooms, wellness gifts, gift shops' },
    alt: 'A miswak stick and two wooden toothbrushes with natural bristles lying side by side on a white surface'
  },
  {
    id: 'gift-grooming-kit', code: 'BC-404', cat: 'gifts', type: 'Gift sets', unit: 'kits', engrave: true,
    name: 'Bamboo Grooming Kit',
    desc: 'Our bamboo razor with the replaceable triple-blade head, a bamboo shaving brush, shaving gel and a bamboo pocket comb, boxed as one kit. Items can be swapped, and the razor and brush handles can be engraved.',
    specs: { Contents: 'Bamboo shaving razor with replaceable head, bamboo shaving brush, shaving gel, bamboo pocket hair comb', Packaging: 'Gift box or sleeve; message card on request', Personalisation: 'Engraving on the razor and brush handles; your logo or message on the box or sleeve', Use: 'Client and staff gifts, hotel suites, salon retail' },
    alt: 'Shaving set of a safety razor and a shaving brush with a cream handle on a chrome stand against a white background'
  },
  {
    id: 'gift-festive-light', code: 'BC-405', cat: 'gifts', type: 'Gift sets', unit: 'hampers', engrave: true,
    name: 'Bamboo Festive Hamper',
    desc: 'Packed for Diwali: a bamboo diya holder, bamboo tealight holders and a bamboo coaster set. Contents can be swapped. The coasters can be engraved, and the box or sleeve can carry your logo or a Diwali greeting.',
    specs: { Contents: 'Bamboo diya holder, bamboo tealight holders, bamboo coaster set', Packaging: 'Gift box or sleeve; greeting card on request', Personalisation: 'Engraving on the bamboo; your logo or greeting on the box or sleeve', Use: 'Diwali gifts for staff, clients and dealers' },
    alt: 'Corrugated kraft gift box tied with a red jute twine bow on star-print navy fabric, with warm golden bokeh lights behind'
  },
  /* Bamboo Constructions */
  {
    id: 'treated-poles', code: 'BC-501', cat: 'construction', type: 'Poles & slats', unit: 'poles',
    name: 'Treated Bamboo Poles',
    desc: 'Whole round bamboo poles, treated before supply. Architects, builders, resorts and landscapers use them for pergolas, gazebos, fencing and shade structures. Lengths, diameters and the treatment method on request.',
    specs: { Material: 'Whole round bamboo', Treatment: 'Method on request', Sizes: 'Lengths and diameters on request', Use: 'Pergolas, gazebos, fencing, shade structures' },
    alt: 'Stack of cut bamboo poles bound with dark cord, resting on weathered wooden boards'
  },
  {
    id: 'split-bamboo', code: 'BC-502', cat: 'construction', type: 'Poles & slats', unit: 'bundles',
    name: 'Split Bamboo & Slats',
    desc: 'Bamboo split lengthwise into strips, or cut into flat slats, and sold in bundles. Landscapers and interior contractors use them for screens, trellises, ceilings and wall cladding. Widths, lengths and treatment on request.',
    specs: { Material: 'Split bamboo strips and flat slats', Sizes: 'Widths and lengths on request', Treatment: 'On request', Use: 'Screens, trellises, ceilings, wall cladding' },
    alt: 'Pile of split bamboo pieces with angled cut ends stacked under a shelter'
  },
  {
    id: 'mat-board', code: 'BC-503', cat: 'construction', type: 'Boards & panels', unit: 'sheets',
    name: 'Bamboo Mat Board',
    desc: 'A rigid board made from layers of woven bamboo mat, bonded with resin under pressure. Builders and interior contractors use it for partitions, false ceilings, wall panelling and furniture backs. Thicknesses and sheet sizes on request.',
    specs: { Material: 'Woven bamboo mats, bonded with resin under pressure', Thickness: 'On request', 'Sheet size': 'On request', Use: 'Partitions, false ceilings, panelling, furniture backs' },
    alt: 'Close-up of a woven bamboo mat in a basket-weave pattern of golden strips'
  },
  {
    id: 'wall-panels', code: 'BC-504', cat: 'construction', type: 'Boards & panels', unit: 'sq ft',
    name: 'Bamboo Wall Panels',
    desc: 'Bamboo panels for cladding interior walls and feature walls in hotel lobbies, restaurants, offices and homes. Quoted by the square foot, with panel size, finish and fixing details on request.',
    specs: { Material: 'Bamboo; construction on request', Finish: 'On request', Sizes: 'On request', Use: 'Interior wall cladding and feature walls' },
    alt: 'Wall clad in vertical bamboo strips around a wooden shuttered window, with streaks of sunlight'
  },
  {
    id: 'fencing-screens', code: 'BC-505', cat: 'construction', type: 'Boards & panels', unit: 'sq ft',
    name: 'Bamboo Fencing Screens',
    desc: 'Bamboo canes tied into rolls or set in framed panels. Landscapers, resorts and builders put them up as garden boundaries, terrace and balcony screens, and around pools. Heights, lengths and treatment on request.',
    specs: { Format: 'Rolls or framed panels, on request', Sizes: 'Heights and lengths on request', Treatment: 'On request', Use: 'Garden boundaries, terrace and balcony screens, pool areas' },
    alt: 'Bamboo cane screen fence in a garden with a climbing vine and plants at its base'
  },
  {
    id: 'strand-flooring', code: 'BC-506', cat: 'construction', type: 'Flooring & roofing', unit: 'sq ft',
    name: 'Strand-Woven Bamboo Flooring',
    desc: 'Floor planks cut from blocks of bamboo fibre compressed with resin. Architects and flooring contractors lay them in homes, hotels, offices and shops. Plank size, finish and fitting system on request.',
    specs: { Material: 'Bamboo fibre compressed with resin', 'Plank size': 'On request', Finish: 'On request', Use: 'Interior floors' },
    alt: 'Dark grooved bamboo decking boards laid diagonally with a white daisy resting on them'
  },
  {
    id: 'roofing-sheets', code: 'BC-507', cat: 'construction', type: 'Flooring & roofing', unit: 'sheets',
    name: 'Bamboo Roofing Sheets',
    desc: 'Corrugated roofing sheets made from woven bamboo mats, bonded with resin and pressed into shape. For sheds, farm buildings, site offices, verandahs and cottages. Sheet size and thickness on request.',
    specs: { Material: 'Woven bamboo mats, bonded with resin and corrugated', Sizes: 'Sheet size and thickness on request', Use: 'Sheds, farm buildings, site offices, verandahs, cottages' },
    alt: 'Underside of a pitched roof built from bamboo rafters and woven bamboo panels, with light at the ridge'
  }
];
