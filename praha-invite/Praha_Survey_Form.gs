function createPrahaSurvey() {
  var form = FormApp.create('Praha Café & Catering — Customer Survey');
  form.setDescription(
    'Help us improve your experience at Praha! This quick survey covers our menu, pricing, and what you love (or don\'t). Takes less than 2 minutes.'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);

  // ── Q1: Visit Frequency ──────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('How often do you visit Praha Café & Catering?')
    .setChoiceValues([
      'Daily',
      'A few times a week',
      'Once a week',
      'A few times a month',
      'First time / rarely'
    ])
    .setRequired(true);

  // ── Q2: Best Value Drinks ────────────────────────────────────────────────
  var drinkChoices = [
    'Iced Long Black — $6',
    'Belgian Hot Chocolate — $6 / $7',
    'Belgian Chocolate Mocha — $6 / $7',
    'Dirty Chai — $6 / $7',
    'Iced Latte — $6.8',
    'Milkshake — $7.5',
    'Iced Chocolate — $8',
    'Iced Matcha — $8.5',
    'Iced Chai — $8.5',
    'Iced Coffee — $8.5',
    'Coffee Frappe — $9',
    'Mocha Frappe — $9',
    'Protein Shake — $9',
    'Fresh Juice — $9',
    'Matcha Latte — $5 / $5.5',
    'Turmeric Latte — $5 / $5.5',
    'Chai Latte — $5 / $5.5'
  ];

  form.addCheckboxItem()
    .setTitle('Select the 3 drinks you feel are BEST value for money:')
    .setChoiceValues(drinkChoices)
    .setRequired(true);

  // ── Q3: Worst Value Drinks ───────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Select the 3 drinks you feel are WORST value for money:')
    .setChoiceValues(drinkChoices)
    .setRequired(true);

  // ── Q4: Favourite Food Items ─────────────────────────────────────────────
  var foodChoices = [
    'Sourdough Toast — $8',
    'Raisin Toast — $8',
    'House Salad — $10',
    'Bacon & Egg Roll — $14',
    'Eggs Your Way on Toast — $14',
    'Cheese Burger — $14',
    'Chicken Breast Burger — $14',
    'Chicken Club Sandwich — $15',
    'Loaded Toast — $16',
    'Pancakes — $16',
    'Eggs Benny — $20'
  ];

  form.addCheckboxItem()
    .setTitle('Select your 3 favourite food items:')
    .setChoiceValues(foodChoices)
    .setRequired(true);

  // ── Q5: Least Likely to Order ────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Select 3 food items you\'re least likely to order:')
    .setChoiceValues(foodChoices)
    .setRequired(true);

  // ── Q6: Best Value Food ──────────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Select the 3 food items you feel are BEST value for money:')
    .setChoiceValues(foodChoices)
    .setRequired(true);

  // ── Q7: Worst Value Food ─────────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Select the 3 food items you feel are WORST value for money:')
    .setChoiceValues(foodChoices)
    .setRequired(true);

  // ── Q8: Priced Out ───────────────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Is there anything you\'d love to order more often but find too expensive? (Select all that apply)')
    .setChoiceValues([
      'Eggs Benny — $20',
      'Loaded Toast — $16',
      'Pancakes — $16',
      'Chicken Club Sandwich — $15',
      'Bacon & Egg Roll — $14',
      'Eggs Your Way on Toast — $14',
      'Cheese Burger — $14',
      'Chicken Breast Burger — $14',
      'Protein Shake — $9',
      'Fresh Juice — $9',
      'Coffee Frappe — $9',
      'Mocha Frappe — $9',
      'Nothing — prices are fair'
    ])
    .setRequired(true);

  // ── Q9: One Menu Change ──────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('If you could change one thing about our menu, what would it be?')
    .setChoiceValues([
      'Lower prices on some items',
      'Bigger portions',
      'More variety in drinks',
      'More variety in food',
      'More dietary options (vegan / gluten free)',
      'I\'m happy as is'
    ])
    .setRequired(true);

  // ── Q10: Likelihood to Recommend ────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('How likely are you to recommend Praha to a friend or colleague?')
    .setChoiceValues([
      'Definitely not',
      'Probably not',
      'Maybe',
      'Likely',
      'Definitely yes'
    ])
    .setRequired(true);

  // ── Q11: Open Feedback ───────────────────────────────────────────────────
  form.addParagraphTextItem()
    .setTitle('Any other comments, suggestions, or things you\'d like to see on the menu?')
    .setRequired(false);

  // ── Output the links ─────────────────────────────────────────────────────
  Logger.log('✅ Form created!');
  Logger.log('📋 Edit URL:  ' + form.getEditUrl());
  Logger.log('🔗 Share URL: ' + form.getPublishedUrl());
}
