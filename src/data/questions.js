const questions = [
  // Characters - Easy
  { id: 1, category: 'Characters', difficulty: 'Easy', question: "What is the name of Homer Simpson's pet dog?", options: ['Santa\'s Little Helper', 'Snowball', 'Bart Jr.', 'Knuckles'], answer: 0 },
  { id: 2, category: 'Characters', difficulty: 'Easy', question: 'What is Bart Simpson\'s catchphrase when he gets in trouble?', options: ['Eat my shorts!', 'Cowabunga!', 'D\'oh!', 'Excellent!'], answer: 0 },
  { id: 3, category: 'Characters', difficulty: 'Easy', question: 'What does Homer Simpson work as at the Springfield Nuclear Power Plant?', options: ['Safety Inspector', 'Plant Manager', 'Security Guard', 'Engineer'], answer: 0 },
  { id: 4, category: 'Characters', difficulty: 'Easy', question: "What color is Marge Simpson's hair?", options: ['Blue', 'Yellow', 'Purple', 'Green'], answer: 2 },
  { id: 5, category: 'Characters', difficulty: 'Medium', question: "What is Mr. Burns' first name?", options: ['Charles', 'Montgomery', 'Waylon', 'Lionel'], answer: 1 },
  { id: 6, category: 'Characters', difficulty: 'Medium', question: 'What is the name of the Simpsons\' next-door neighbor?', options: ['Ned Flanders', 'Lenny Leonard', 'Moe Szyslak', 'Barney Gumble'], answer: 0 },
  { id: 7, category: 'Characters', difficulty: 'Hard', question: "What is Krusty the Clown's real name?", options: ['Herschel Krustofsky', 'Julius Hibbert', 'Waylon Smithers', 'Lionel Hutz'], answer: 0 },
  { id: 8, category: 'Characters', difficulty: 'Hard', question: 'Who voices Homer Simpson?', options: ['Dan Castellaneta', 'Harry Shearer', 'Hank Azaria', 'Nancy Cartwright'], answer: 0 },

  // Episodes - Easy
  { id: 9, category: 'Episodes', difficulty: 'Easy', question: 'What is the name of the Simpsons\' hometown?', options: ['Shelbyville', 'Springfield', 'Capital City', 'Ogdenville'], answer: 1 },
  { id: 10, category: 'Episodes', difficulty: 'Easy', question: 'What school does Bart attend?', options: ['Springfield Elementary', 'Shelbyville Elementary', 'Springfield High', 'Ogdenville Academy'], answer: 0 },
  { id: 11, category: 'Episodes', difficulty: 'Medium', question: 'What is the name of the annual Halloween episode series?', options: ['Treehouse of Horror', 'Spooky Springfield', 'Simpsons Scaries', 'Night of the Living Homer'], answer: 0 },
  { id: 12, category: 'Episodes', difficulty: 'Medium', question: 'In which year did The Simpsons first air as a half-hour show?', options: ['1987', '1989', '1990', '1992'], answer: 1 },
  { id: 13, category: 'Episodes', difficulty: 'Hard', question: 'What is the title of The Simpsons Movie released in 2007?', options: ['The Simpsons Movie', 'Simpsons: The Movie', 'Springfield Story', 'The Simpsons: Animated'], answer: 0 },
  { id: 14, category: 'Episodes', difficulty: 'Hard', question: 'Which Simpsons episode features the song "See My Vest"?', options: ['Two Dozen and One Greyhounds', 'Lisa\'s Wedding', 'Cape Feare', 'Marge vs. the Monorail'], answer: 0 },

  // Quotes - Easy
  { id: 15, category: 'Quotes', difficulty: 'Easy', question: 'Who says "Why you little...!" while strangling Bart?', options: ['Homer Simpson', 'Ned Flanders', 'Moe Szyslak', 'Mr. Burns'], answer: 0 },
  { id: 16, category: 'Quotes', difficulty: 'Easy', question: 'Who frequently says "Excellent..." while rubbing his hands together?', options: ['Mr. Burns', 'Principal Skinner', 'Krusty the Clown', 'Dr. Hibbert'], answer: 0 },
  { id: 17, category: 'Quotes', difficulty: 'Medium', question: 'Who says "Okely dokely"?', options: ['Ned Flanders', 'Moe Szyslak', 'Apu Nahasapeemapetilon', 'Barney Gumble'], answer: 0 },
  { id: 18, category: 'Quotes', difficulty: 'Medium', question: 'Who is known for the phrase "Don\'t have a cow, man"?', options: ['Bart Simpson', 'Homer Simpson', 'Nelson Muntz', 'Milhouse Van Houten'], answer: 0 },
  { id: 19, category: 'Quotes', difficulty: 'Hard', question: 'Which character says "I am so smart! S-M-R-T!"?', options: ['Homer Simpson', 'Bart Simpson', 'Lisa Simpson', 'Ralph Wiggum'], answer: 0 },
  { id: 20, category: 'Quotes', difficulty: 'Hard', question: 'Who says "Me fail English? That\'s unpossible"?', options: ['Ralph Wiggum', 'Nelson Muntz', 'Bart Simpson', 'Milhouse Van Houten'], answer: 0 },

  // Trivia - Easy
  { id: 21, category: 'Trivia', difficulty: 'Easy', question: "What is the name of Bart's best friend?", options: ['Nelson Muntz', 'Milhouse Van Houten', 'Ralph Wiggum', 'Martin Prince'], answer: 1 },
  { id: 22, category: 'Trivia', difficulty: 'Easy', question: 'How many fingers does each Simpsons character have on each hand?', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 23, category: 'Trivia', difficulty: 'Medium', question: 'What instrument does Lisa Simpson play?', options: ['Saxophone', 'Piano', 'Guitar', 'Drums'], answer: 0 },
  { id: 24, category: 'Trivia', difficulty: 'Medium', question: 'What is the name of Springfield\'s local bar?', options: ["Moe's Tavern", "Duff Gardens", "Kwik-E-Mart", "The Android's Dungeon"], answer: 0 },
  { id: 25, category: 'Trivia', difficulty: 'Hard', question: 'Who created The Simpsons?', options: ['Matt Groening', 'Seth MacFarlane', 'Mike Judge', 'Trey Parker'], answer: 0 },
  { id: 26, category: 'Trivia', difficulty: 'Hard', question: 'What is the name of the comic book store owner?', options: ['Comic Book Guy', 'Jeff Albertson', 'Both A and B', 'Gil Gunderson'], answer: 2 },

  // User-submitted batch
  { id: 27, category: 'Episodes', difficulty: 'Medium', question: 'S9E14 "Das Bus": What fruit caused Otto to crash the school bus?', options: ['Grapefruit', 'Apple', 'Orange', 'Banana'], answer: 0 },
  { id: 28, category: 'Characters', difficulty: 'Easy', question: "What is Marge Simpson's maiden name?", options: ['Bouvier', 'Smith', 'Windgate', 'Skinner'], answer: 0 },
  { id: 29, category: 'Characters', difficulty: 'Easy', question: "What is the name of Springfield Elementary's groundskeeper?", options: ['Groundskeeper Willie', 'Groundskeeper Billy', 'Groundskeeper Milly', 'Groundskeeper Nelson'], answer: 0 },
  { id: 30, category: 'Episodes', difficulty: 'Medium', question: 'Who accidentally shot Mr. Burns in the classic two-part episode?', options: ['Maggie Simpson', 'Smithers', 'Bart Simpson', 'Lisa Simpson'], answer: 0 },
  { id: 31, category: 'Characters', difficulty: 'Easy', question: "What are the names of Marge's sisters?", options: ['Selma and Patty', 'Thelma and Sally', 'Maggie and Lisa', 'Martin and Sandy'], answer: 0 },
  { id: 32, category: 'Characters', difficulty: 'Medium', question: "What is Moe's last name?", options: ['Szyslak', 'Black', 'Coatrack', 'Duff'], answer: 0 },
  { id: 33, category: 'Trivia', difficulty: 'Easy', question: "What is Springfield's local beer brand?", options: ['Duff', 'Miller', 'Bud', 'Ruff'], answer: 0 },
  { id: 34, category: 'Trivia', difficulty: 'Easy', question: 'What street do the Simpsons live on?', options: ['Evergreen Terrace', 'Evergreen Road', 'Evergreen Avenue', 'Evergreen Court'], answer: 0 },
  { id: 35, category: 'Trivia', difficulty: 'Easy', question: "What is the name of Bart and Lisa's favorite cartoon duo?", options: ['Itchy and Scratchy', 'Ritchie and Blacky', "Krusty the Clown's Cartoon Hour", "Krusty's Cat and Mouse Hour"], answer: 0 },
  { id: 36, category: 'Episodes', difficulty: 'Medium', question: "What is the name of Homer's barbershop quartet?", options: ['The B-Flats', 'The Be Sharps', 'The B-Stills', 'The B-Shorts'], answer: 1 },
  { id: 37, category: 'Episodes', difficulty: 'Medium', question: 'Which former U.S. president moves in next door to the Simpsons?', options: ['George H.W. Bush', 'George W. Bush', 'Bill Clinton', 'Dan Quayle'], answer: 0 },
  { id: 38, category: 'Characters', difficulty: 'Hard', question: "What is the name of Homer's helper monkey?", options: ['Mojo', 'Banjo', 'Poppers', 'Broody'], answer: 0 },
  { id: 39, category: 'Episodes', difficulty: 'Hard', question: "What is the name of Bart's tabloid-style TV news show?", options: ["Bart's People", "Bart's Corner", "Bart's Totally Awesome News Hour", "News by Bart"], answer: 0 },
  { id: 40, category: 'Episodes', difficulty: 'Hard', question: "What is the name of Bart's boy band?", options: ['Party Posse', 'Boys of Springfield', 'Boyz Wander', 'USS Sean Spanker'], answer: 0 },
  { id: 41, category: 'Trivia', difficulty: 'Easy', question: 'What food is Homer Simpson most famously obsessed with?', options: ['Doughnuts', 'Chicken', 'Ribs', 'Pork rinds'], answer: 0 },

  // Follow-up clarifications
  { id: 42, category: 'Episodes', difficulty: 'Medium', question: 'In "The Joy of Sect," what modern-day cult, similar to Scientology, do the Simpsons join?', options: ['Movementarian', 'Libertarian', 'Christian', 'Jackrabbittry'], answer: 0 },
  { id: 43, category: 'Characters', difficulty: 'Easy', question: "What is Milhouse's last name?", options: ['Van Houten', 'James', 'Vanderpump', 'Vanderbilt'], answer: 0 },
  { id: 44, category: 'Characters', difficulty: 'Medium', question: "What is the name of Bart's Black classmate at Springfield Elementary?", options: ['Lewis', 'Wendell', 'Gerald', 'Jerome'], answer: 0 },
  { id: 45, category: 'Episodes', difficulty: 'Medium', question: 'Who does Marge set Bart up on a playdate with?', options: ['Ralph Wiggum', 'Martin Prince', 'Milhouse Van Houten', 'Krusty the Clown'], answer: 0 },
  { id: 46, category: 'Episodes', difficulty: 'Hard', question: 'What video game does Bart shoplift at Christmas?', options: ['Bonestorm', 'Bone-Crusher 5', 'Skateboard Killer', 'Thrasher'], answer: 0 },
  { id: 47, category: 'Episodes', difficulty: 'Hard', question: 'In "Bart Sells His Soul," what rock song does the church organist unknowingly play after Bart submits fake hymn lyrics?', options: ['In-A-Gadda-Da-Vida', 'Iron Man', 'Smoke on the Water', 'Stairway to Heaven'], answer: 0 },
  { id: 48, category: 'Characters', difficulty: 'Hard', question: "What is Duffman's most commonly cited real name?", options: ['Barry Duffman', 'Sid', 'Larry', 'Joe'], answer: 0 },

  // Second round of clarifications
  { id: 49, category: 'Episodes', difficulty: 'Medium', question: 'True or False: In "Mayored to the Mob," Homer becomes Mayor Quimby\'s bodyguard.', options: ['True', 'False'], answer: 0 },
  { id: 50, category: 'Characters', difficulty: 'Hard', question: 'According to "Viva Ned Flanders," how old is Ned Flanders?', options: ['60', '50', '40', '66'], answer: 0 },
  { id: 51, category: 'Episodes', difficulty: 'Medium', question: 'In "I\'m with Cupid," what holiday does Elton John perform for?', options: ["Valentine's Day", 'Christmas Day', 'Independence Day', 'Thanksgiving Day'], answer: 0 },
  { id: 52, category: 'Trivia', difficulty: 'Medium', question: 'What is the name of the SUV Marge falls in love with?', options: ['Canyonero', 'CanyonArrow', 'CanyonKrusher', 'Canyonator'], answer: 0 },
  { id: 53, category: 'Episodes', difficulty: 'Hard', question: 'On what holiday does Bart get drunk, embarrassing Marge during a parade?', options: ["St. Patrick's Day", "New Year's Eve", 'Christmas', 'Halloween'], answer: 0 },
  { id: 54, category: 'Episodes', difficulty: 'Medium', question: 'Why does Homer resemble Krusty the Clown?', options: ['He was originally designed to double as Krusty', 'They are secretly brothers', "Krusty is Homer's father", "Krusty is Homer's son"], answer: 0 },
];

export default questions;
