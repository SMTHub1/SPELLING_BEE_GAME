document.addEventListener('DOMContentLoaded', () => {
    // List of words to be spelled
     const words = [
        "apple", "banana", "cat", "dog", "elephant",
        "flower", "guitar", "house", "internet", "jacket", "absurd", "accommodate", "ache", "acquire", "acquiesce",
        "address","allot","amateur","annihilate", " apathetic","apparent","appellate","argue","argument","assess",
        "assignment","believe","benefit","bizarre","business","cemetery", "chandelier","colleague","concede",
        "conscious","conscientious", "convenience","corrupt","disappear","disappointed","doubt", "ecstasy",
        "efficient","embarrass","exaggerate","fascinate","foreign","gauge", "grateful", "guidance", "harass", 
        "hierarchy", "humorous","ignorance","immediately","indispensable","inoculate", "intelligence","jewelry",
        "liaison","judgment","license", "maintenance", "maneuver", "mischievous","mortgage","necessary", "neighbor",
        "nervous","nuisance","occasion","occurrence", "original","parliament","parallel","perseverance","plagiarize",
         "possess","practice","precede","prejudice","propaganda","queue", "recognize","recommend","referred","receive",
         "relevant"," rhythm", "ridiculous","sarcasm","schedule","separate","sergeant", "sincerely","souvenir", "spaghetti",
          "successful", "supersede", "surprise","surveillance","technique","tomorrow","triumphant","unanimous","unnecessary",
          "vacuum","abecedarian","accessory","adolescence","aegis","aesthetic","ailurophile","amalgamate", "anathema","anachronistic",
          "apoplectic","apocryphal","arboretum", "asphyxiate","augment","balderdash","beguile","belligerent", "bourgeoisie","cacophony",
          "capricious","catafalque","clandestine","colloquial","connoisseur","deleterious","dendrochronology","dilettante","discombobulate",
          "ebullient","echelon","efficacious", "enthusiasm","epitome","exacerbate","facsimile","fahrenheit",
          "foray","fuchsia","garrulous","guillotine","heuristic", "idiosyncrasy","ignominious","innuendo",
          "interminable", "jurisprudence","labyrinthine","laconic","lascivious","liturgy ","macabre","mellifluous",
          "misogynist","moniker","moxie","myriad ","nebulous","nepotism","obfuscate","onomatopoeia","ostentatious","panacea",
          "paradigm","paraphernalia","pernicious","perquisite", "philanthropy","pneumonia","prerogative","prescient"," pusillanimous",
          "quandary","quintessential","recalcitrant","remuneration","rendezvous","repartee","reticent","saccharine","salubrious",
          "sanctimonious","scintillating","sepulchre","sycophant","taciturn","tantamount","ubiquitous","unctuous","vacillate",
          "vicissitude", "vilify","vociferous","waft","whimsical","writhe", " xenophobia","zephyr","ziggurat ","zoophyte","zoolatry",
           "acanthocephalan","appoggiatura","autochthonous",        "breviloquence","candelabrum","caryatid","catachresis","chiaroscurist",
           "chthonic","codswallop","conundrum","coruscate", "crepuscular","cytokinesis", "deipnosophist", "dichotomous ", "erysipelas",
           "esquamulose","etiology ", "euonym", " exsanguinate ","floccinaucinihilipilification","foudroyant","fugacious", "gerrymander",
           "gesticulate","gymkhana ","hegira","heuristic", "hippopotomonstrosesquippedaliophobia", "histrionic","idoneous ", "inanition",
           "incunabulum ","indefatigable","ineluctable","innate ","insurrectionary","knaidel","lagniappe","limnology", " logorrhea",
           "malfeasance","manumission","mellifluous", "metacognition","monopsony","monosyllabic","myrmidon", "nomenclature","obsequious",
           "otorhinolaryngology","oxymoron","paean","palindrome","panegyric","pernicious","peripatetic",
"pococurante", "propinquity","proselytize","prospicience", "pusillanimous ","quidnunc","reconnoiter","rendezvous", "reticulate",
"rhododendron","saccharine", "sarcophagus ", " schadenfreude","scherenschnitte","sciamachy","scintillating","sepulchre","sesquipedalian",
"stichomythia","succedaneum","susurrus", "sycophant", "tachistoscope","taradiddle","terpsichorean",        "transmogrify","turgid",
"unanimous","unction","valetudinarian","velitation", "verisimilitude", "vicissitude", "villainous ", 
" vivisepulture","wassail","xenoglossia","xylophone","zeugma", "zoanthropy","zygote",  "jacket","apple","banana","orange","grape","pineapple",
                "abattoir","abbess","abbey","abbreviate","aberration","abeyance","abhorrence",
                "ability","abolish","aborigine","abort","abortive","abracadabra","abscess","abscissa",
                "absent","absenteeism","abstain","abysmal","abyss","academy","acappella",
                "accede","accelerate","accentuate","accept","access","accessory","accident",
                "accidentally","accommodate","accommodation","accompany","accord","account",
                "accountability","accreditation","accrue","accuracy","accustom","achieve","achilles-heel","achromatic","acknowledge","acolyte","acoustic","acquaintance","acquiesce",
                "acquire","acquisition","acquittal","acquitted","acrobat","across","activity","actor","actress","acupuncture","addendum","addiction","address","addressee","adieu","adjacent","adjective",
                "adjourn","admiral","admission","admittance","adolescent","adressee","adult","advance","adventure","advertise","advertisement","aerobic","aeroplane","aesthetics","affirm","afforestation","africa",
                "african","agglutinate","aggrandise","aggrandizement","aggravate","aggression","aggressor","aghast","agoraphobia","agree","agreegate","agreement","agriculture","aid","aide","aide-de-camp",
                "airport","aisle","albatross","albino","alibi","allege","alliance","alligator","alliteration",
                "allocation","allonym","allotment","allottee","allowance","almighty","alphabetic","aardvark", "aardvarks", "ababa", 
                "abaci", "aback", "abactor", "abactors", "abacus", "abacuses", "abaft", "abalone", "abandon", "abandoned", 
                "abandonee", "abandonees", "abandoning", "abandonment", "abandons", "abase", "abased", "abasement", "abases", 
                "abash", "abashed", "abashes", "abashing", "abasing", "abatable", "abate", "abated", "abatement", "abatements", 
                "abater", "abaters", "abates", "abating", "abator", "abators", "abattoir", "abattoirs", "abbacies", "abbacy", "abbess",
                 "abbesses", "abbey", "abbeys", "abbott", "abbreviate", "abbreviated", "abbreviates", "abbreviating", "abbreviation", 
                 "abbreviations", "abbreviator", "abbreviators" ,"abdicate", "abdicated", "abdicates", "abdicating", "abdication", "abdications", 
                 "abdicator", "abdicators", "abdomen", "abdomens", "abdominal", "abduct", "abducted", "abducting", "abduction", "abductions", "abductor", 
                 "abductors", "abducts", "abeam", "abearances", "abecedarian", "abecedarians", "abed", "abel", "aberdeen", 
                 "aberrance", "aberrant","aberration", "aberrational", "aberrations", "abet", "abets", "abetted", "abetting", "abettor", "abettors", "abeyance", "abeyant", "abhor", "abhorred", "abhorrence", "abhorrent", "abhorrently", "abhorrer", "abhorrers", "abhorring", "abhors", "abidance", "abide", "abided", "abiders", "abides", "abiding", "abidingly", "abidjan", "abigail", "abilities", "ability", "abject", "abjection", "abjectly", "abjuration", "abjurations", "abjure", "abjured", "abjurer", "abjurers", "abjures", "abjuring", "ablate", "ablated", "ablates", "ablating", "ablation", "ablations", "ablative", "ablatives", "ablaut", "ablaze", "able", 
                 "abler", "ablest", "abloom", "ablution", "ablutions", "ably", "abnegate", "abnegated", "abnegates", "abnegating", "abnegation", "abnegator", "abnegators", "abnormal", "abnormalities", "abnormality", "abnormally", "aboard", "abode", "abodes", "abolish", "abolished", "abolishes", "abolishing", "abolishment", "abolition", "abolitionism", "abolitionist", "abolitionists", "abominable", "abominably", "abominate", "abominated", "abominates", "abominating", "abomination", "abominations", "abominator", "abominators", "aboriginal", "aborigine", "aborigines", "abort", "aborted", "abortifacient", "abortifacients", "aborting", "abortion", "abortionist", "abortionists", "abortions", "abortive", "aborts", "abortus", "abound", "abounded", "abounding", "abounds", "about", "above", "aboveground", "abracadabra",
                  "abrade", "abraded", "abrader", "abraders", "abrades","abrading", "abraham", "abrasion", "abrasions", "abrasive", "abrasively", "abrasives", "abreaction", "abreast", "abridge", "abridged", "abridger", "abridgers", "abridges", "abridging", "abridgment", "abridgments", "abroad", "abrogate", "abrogated", "abrogates", "abrogating", "abrogation", "abrogator", "abrogators", "abrupt", "abruptly", "abruptness", "abscess", "abscessed", "abscesses", "abscise", "abscised", "abscises", "abscising", "abscissa", "abscissas", "abscission", "abscond", "absconded", "absconder", "absconders", "absconding", "absconds", "abseil", "abseiled", "abseiler", "abseilers", "abseiling", "abseils", "absence", "absences", "absent", "absente", "absented", "absentee", "absenteeism", "absentees", "absentia", "absenting", "absently", "absentminded", "absentmindedly", 
                  "absents", "absinth", "absinthe", "absinthes", "absinths", "absolute","absolutely", "absoluteness", "absolutes", "absolution", "absolutions", "absolutism", "absolutist", "absolutists", "absolve", "absolved", "absolver", "absolvers", "absolves", "absolving", "absorb", "absorbable", "absorbed", "absorbedly", "absorbencies", "absorbency", "absorbent", "absorbents", "absorber", "absorbers", "absorbing", "absorbingly", "absorbs", "absorption", "absorptive", "abstain", "abstained", "abstainer", "abstainers", "abstaining", "abstains", "abstemious", "abstemiously", "abstention", "abstentions", "abstinence", "abstinent", "abstinently", "abstract", "abstracted", "abstractedly", "abstractedness", "abstracter", "abstracters", "abstracting", "abstraction", "abstractionism", "abstractionist", "abstractionists", "abstractions", "abstractive", "abstractly", "abstractness", "abstractor", "abstractors", "abstracts", "abstruse", "abstrusely", "abstruseness", "absurd", "absurdities", "absurdity", "absurdly", "absurdum", "abuja", 
                  "abundance", "abundant", "abundantly", "abuse", "abused", "abuser","abusers", "abuses", "abusing", "abusive", "abusively", "abusiveness", "abut", "abutment", "abutments", "abuts", "abuttals", "abutted", "abutter", "abutters", "abutting", "abysm", "abysmal", "abysmally", "abysms", "abyss", "abyssal", "abysses", "abyssinia", "abyssinian", "abyssinians", "acacia", "acacias", "academe", "academia", "academic", "academically", "academician", "academicians", "academics", "academies", "academy", "acanthi", "acanthus", "acanthuses", "acapulco", "accede", "acceded", "accedence", "acceder", "acceders", "accedes", "acceding", "accelerate", "accelerated", "accelerates", "accelerating", "acceleration", "accelerations", "accelerator", "accelerators", "accelerometer", "accelerometers", "accent", "accented", "accenting", "accents", "accentual", "accentuate", "accentuated", "accentuates", "accentuating", "accentuation", "accept", "acceptability", "acceptable", "acceptably", "acceptance", "acceptances", 
                  "acceptant", "acceptation", "accepted", "accepting", "acceptor", "acceptors", "accepts","access", "accessed", "accesses", "accessibility", "accessible", "accessibly", "accessing", "accession", "accessions", "accessories", "accessorize", "accessory", "accidence", "accidens", "accident", "accidental", "accidentally", "accidentals", "accidents", "acclaim", "acclaimed", "acclaiming", "acclaims", "acclamation", "acclamations", "acclamatory", "acclimate", "acclimated", "acclimates", "acclimating", "acclimation", "acclimatization", "acclimatize", "acclimatized", "acclimatizes", "acclimatizing", "acclivity", "accolade", "accolades", "accommodate", "accommodated", "accommodates", "accommodating", "accommodatingly", "accommodation", "accommodations", "accommodative", "accompanied", "accompanies", "accompaniment", "accompaniments", "accompanist", "accompanists", "accompany", "accompanying", "accompli", "accomplice", "accomplices", "accomplish", "accomplishable", "accomplished", "accomplishes", "accomplishing", "accomplishment", "accomplishments", "accord", "accordance", "accordant", "accorded", "according", "accordingly", "accordion", "accordionist", "accordionists", "accordions", "accords", "accost", "accosted", "accosting", "accosts", "accouchement", "accouchements", "account", "accountabilities", "accountability", "accountable", "accountably", "accountancies", "accountancy", "accountant", 
                  "accountants", "accounted", "accounting", "accountings", "accounts","accouter", "accoutered", "accoutering", "accouterment", "accouterments", "accouters", "accra", "accredit", "accreditation", "accredited", "accrediting", "accredits", "accrescendi", "accrete", "accreted", "accretes", "accreting", "accretion", "accretions", "accruable", "accrual", "accruals", "accrue", "accrued", "accrues", "accruing", "acculturate", "acculturated", "acculturates", "acculturating", "acculturation", "accumulate", "accumulated", "accumulates", "accumulating", "accumulation", "accumulations", "accumulative", "accumulator", "accumulators", "accuracy", "accurate", "accurately", "accurateness", "accursed", "accusal", "accusals", "accusation", "accusations", "accusative", "accusatives", "accusatorial", "accusatory", "accuse", "accused", "accuser", "accusers", "accuses", "accusing", "accusingly", "accustom", "accustomed", "accustoming", "accustoms", "aced", "acerbate", "acerbated", "acerbates", "acerbating", "acerbic", "acerbity", "aces", "acetaldehyde", "acetate", "acetates", "acetic", 
                  "acetone", "acetyl", "acetylene", "acetylsalicylic", "ache", "ached","aches", "achievable", "achieve", "achieved", "achievement", "achievements", "achiever", "achievers", "achieves", "achieving", "achilles", "aching", "achromatic", "achy", "aciculate", "acid", "acidic", "acidification", "acidified", "acidifier", "acidifiers", "acidifies", "acidify", "acidifying", "acidity", "acidly", "acidosis", "acids", "acidulate", "acidulated", "acidulates", "acidulating", "acidulous", "acing", "acknowledge", "acknowledgeable", "acknowledged", "acknowledges", "acknowledging", "acknowledgment", "acknowledgments", "acme", "acne", "acolyte", "acolytes", "aconite", "acorn", "acorns", "acoustic", "acoustical", "acoustically", "acoustics", "acquaint", "acquaintance", "acquaintances", "acquainted", "acquainting", "acquaints", "acquest", "acquests", "acquiesce", "acquiesced", "acquiescence", "acquiescent", "acquiescently", "acquiesces", "acquiescing", "acquirable", "acquire", "acquired", "acquirement", "acquirements", "acquires", "acquiring", "acquisition", "acquisitions", "acquisitive", "acquisitively", "acquisitiveness", "acquit", "acquits", "acquittal", "acquittals", "acquittance", "acquittances", "acquitted", "acquitting", "acre", "acreage", "acres", "acrid", "acridity", "acridly", "acrimonious", "acrimoniously", "acrimoniousness", "acrimony", "acrobat", "acrobatic", "acrobatically", "acrobatics", "acrobats", "acronym", "acronymic", "acronyms", "acrophobia", "acropolis", "acropolises", "across", "acrostic", 
                  "acrostics", "acrylic", "acrylics", "acta", "acte", "acted", "actes","actin", "acting", "actinic", "actinide", "actinides", "actinium", "action", "actionable", "actionably", "actions", "activate", "activated", "activates", "activating", "activation", "activator", "activators", "active", "actively", "actives", "activism", "activist", "activists", "activities", "activity", "actor", "actors", "actress", "actresses", "acts", "actual", "actualities", "actuality", "actualization", "actualize", "actualized", "actualizes", "actualizing", "actually", "actuals", "actuarial", "actuarially", "actuaries", "actuary", "actuate", "actuated", "actuates", "actuating", "actuation", "actuator", "actuators", "actum", "actus", "acuity", "acumen", "acupuncture", "acupuncturist", "acupuncturists", "acute", "acutely", "acuteness", "adage", "adages", "adagio", "adagios", "adam", "adamant", "adamantine", "adamantly", "adamants", "adams", "adamson", "adamstown", "adapt", "adaptability", "adaptable", "adaptation", "adaptations", "adapted", "adapter", "adapters", "adapting", "adaptive", "adaptively", "adapts", "addax", "addaxes", "added", "addend", "addenda", "addends", "addendum", "adder", "adders", "addict", "addicted", "addicting", "addiction", "addictions", "addictive", "addicts", "adding", "addis", "addison", "addition", "additional", "additionally", "additions", "additive", "additives", "addle", "addled", "addles", "addling", "address", "addressable", "addressed", "addressee", "addressees", "addresser", "addressers", "addresses", "addressing", "adds", "adduce", "adduced", "adducer", "adducers", "adduces", "adducing", "adduct", "adducted", "adducting", "adduction", "adductive", "adductor", 
                  "adductors", "adducts", "adeem", "adeemed", "adeeming", "adeems","adelaide", "adeline", "ademption", "ademptions", "aden", "adenine", "adenines", "adenoid", "adenoidal", "adenoids", "adenoma", "adenomas", "adenosine", "adept", "adeptly", "adeptness", "adepts", "adequacies", "adequacy", "adequate", "adequately", "adhere", "adhered", "adherence", "adherent", "adherents", "adheres", "adhering", "adhesion", "adhesions", "adhesive", "adhesives", "adiabatic", "adidas", "adieu", "adieus", "adieux", "adios", "adipocere", "adipose", "adiposity", "adit", "adits", "aditus", "adjacency", "adjacent", "adjacently", "adjectival", "adjectivally", "adjective", "adjectives", "adjoin", "adjoined", "adjoining", "adjoins", "adjourn", "adjourned", "adjourning", "adjournment", "adjournments", "adjourns", "adjudge", "adjudged", "adjudges", "adjudging", "adjudgment", "adjudgments", "adjudicate", "adjudicated", "adjudicates", "adjudicating", "adjudication", "adjudicative", "adjudicator", "adjudicators", "adjunct", "adjunction", "adjunctive", "adjuncts", "adjuration", "adjurations", "adjure", "adjured", "adjures", "adjuring", "adjust", "adjustable", "adjustably", "adjusted", "adjuster", "adjusters", "adjusting", "adjustment", "adjustments",
                   "adjusts", "adjutant", "adjutants", "adler", "adman", "admeasurement","administer", "administered", "administering", "administers", "administrate", "administrated", "administrates", "administrating", "administration", "administrations", "administrative", "administratively", "administrator", "administrators", "administratrix", "admirable", "admirably", "admiral", "admirals", "admiralties", "admiralty", "admiration", "admire", "admired", "admirer", "admirers", "admires", "admiring", "admiringly", "admissibility", "admissible", "admissibly", "admission", "admissions", "admissive", "admit", "admits", "admittance", "admitted", "admittedly", "admitting", "admix", "admixed", "admixes", "admixing", "admixture", "admixtures", "admonish", "admonished", "admonishes", "admonishing", "admonishment", "admonishments", "admonition", "admonitions", "admonitory", "adobe", "adobes", "adolescence", "adolescent", "adolescents", "adolph", "adonis", "adopt", "adopted", "adopter", "adopters", "adopting", "adoption", "adoptions", "adoptive", "adopts", "adorable", "adorably", "adoration", "adore", "adored", "adorer", "adorers", "adores", "adoring", "adoringly", "adorn", "adorned", "adorning", "adornment", "adornments", "adorns", "adrenal", "adrenaline", "adrenals", "adrian", "adriatic", "adrienne", "adrift", "adroit",
                    "adroitly", "adroitness", "adsorb", "adsorbed", "adsorbent","adsorbents", "adsorbing", "adsorbs", "adsorption", "adsorptive", "adulate", "adulated", "adulates", "adulating", "adulation", "adulator", "adulators", "adulatory", "adult", "adulterant", "adulterants", "adulterate", "adulterated", "adulterates", "adulterating", "adulteration", "adulterations", "adulterator", "adulterators", "adulterer", "adulterers", "adulteress", "adulteresses", "adulteries", "adulterous", "adulterously", "adultery", "adulthood", "adults", "adumbrate", "adumbrated", "adumbrates", "adumbrating", "adumbration", "advance", "advanced", "advancement", "advancements", "advances", "advancing", "advantage", "advantaged", "advantageous", "advantageously", "advantages", "advantaging", "advent", "adventist", "adventists", "adventitious", "adventitiously", "advents", "adventure", "adventured", "adventurer", "adventurers", "adventures", "adventuresome", "adventuring", "adventurous", "adventurously", "adventurousness", "adverb", "adverbial", "adverbially", "adverbs", "adversarial", "adversaries", "adversary", "adversative", "adverse", "adversely", "adversities", "adversity", "advert", "adverted", "adverting", "advertise", "advertised", "advertisement", "advertisements", "advertiser", "advertisers", "advertises", "advertising", "adverts", "advice", "advices", "advisability", "advisable", "advise", 
                    "advised", "advisedly", "advisee", "advisement", "adviser", "advisers","advises", "advising", "advisor", "advisors", "advisory", "advocacy", "advocate", "advocated", "advocates", "advocating", "advocator", "advocators", "advowson", "adzes", "aegean", "aegis", "aeolian", "aeolians", "aequum", "aerate", "aerated", "aerates", "aerating", "aeration", "aerator", "aerators", "aerial", "aerialist", "aerialists", "aerials", "aerobatics", "aerobe", "aerobes", "aerobic", "aerobically", "aerobics", "aerodynamic", "aerodynamically", "aerodynamics", "aerogramme", "aerogrammes", "aeronaut", "aeronautic", "aeronautical", "aeronautically", "aeronautics", "aeronauts", "aerosol", "aerosols", "aerospace", "aerostat", "aerostatics", "aerostats", "aesop", "aesthete", "aesthetes", "aesthetic", "aesthetically", "aesthetician", "aestheticians", "aestheticism", "aesthetics", "aestivate", "aestivated", "aestivates", "aestivating", "aestivation", "afar", "affability", "affable", "affably", "affair", "affairs", "affect", "affectation", "affectations", "affected", "affectedly", "affectedness", "affecting", "affectingly", "affection", "affectionate", "affectionately", "affections", "affective", "affects", "affeer", "affeered", "affeering", "affeers", "afferent", "affiance", "affianced", "affiances", "affiancing", "affidavit", "affidavits", "affiliate", "affiliated", "affiliates", "affiliating", "affiliation", "affiliations", "affinities", "affinity", "affirm", "affirmance", "affirmances", "affirmant", "affirmants", "affirmata", "affirmation", "affirmations", "affirmative", "affirmatively", "affirmatives", "affirmed", "affirming", "affirms", "affix", "affixed", "affixes", "affixing", "afflatus", "afflatuses", "afflict", "afflicted", "afflicting", "affliction", "afflictions", "afflicts", "affluence", "affluent", "affluently", "afford", "affordability", "affordable", "afforded", "affording", "affords", "afforest", "afforestation", "afforested", "afforesting", "afforests", "affray", "affrays", "affreightment", "affreightments", "affright", 
                    "affrighted", "affrighting", "affrights", "affront", "affronted","affronting", "affronts", "afghan", "afghani", "afghanis", "afghanistan", "afghans", "aficionado", "aficionados", "afield", "afire", "aflame", "afloat", "aflutter", "afoot",
"afore", "aforementioned", "aforesaid", "aforethought", "afoul", "afraid", "afresh", "africa", "african", "africans", "afrikaans", "afrikaner", "afrikaners", "afro", "afros",
"after", "afterbirth", "afterbirths", "afterburner", "afterburners", "aftercare", "afterdeck", "afterdecks", "afterglow", "afterimage", "afterimages", "afterlife", "aftermath", "afternoon", "afternoons",
"aftershave", "aftershock", "aftershocks", "aftertaste", "aftertastes", "afterthought", "afterthoughts", "afterward", "afterwards", "again", "against", "agalma", "agamemnon", "agape", "agar",
"agars", "agate", "agates", "agatha", "aged", "ageism", "ageless", "agelessly", "agelong", "agencies", "agency", "agenda", "agendas", "agendum", "agent",
"agents", "ager", "ageratum", "agers", "ages", "agglomerate", "agglomerated", "agglomerates", "agglomerating", "agglomeration", "agglomerations", "agglutinate", "agglutinated", "agglutinates", "agglutinating",
"agglutination", "agglutinations", "agglutinative", "agglutinin", "aggrandize", "aggrandized", "aggrandizement", "aggrandizes", "aggrandizing", "aggravate", "aggravated", "aggravates", "aggravating", "aggravation", "aggravations",
"aggregate", "aggregated", "aggregately", "aggregates", "aggregating", "aggregation", "aggregations", "aggress", "aggressed", "aggresses", "aggressing", "aggression", "aggressions", "aggressive", "aggressively",
"aggressiveness", "aggressor", "aggressors", "aggrieve","aggrieved", "aggrieves", "aggrieving", "aghast", "agile", "agilely", "agility", "aging", "agio", "agios", "agist", "agisted", "agister", "agisters", "agisting",
"agistment", "agistments", "agistor", "agistors", "agists", "agitate", "agitated", "agitatedly", "agitates", "agitating", "agitation", "agitator", "agitators", "agleam", "aglitter",
"aglow", "agnate", "agnates", "agnes", "agnomen", "agnomens", "agnomina", "agnostic", "agnosticism", "agnostics", "agog", "agonies", "agonistic", "agonistical", "agonize",
"agonized", "agonizes", "agonizing", "agonizingly", "agony", "agoraphobia", "agoraphobic", "agotage",
 "agouti", "agouties", "agoutis", "agraphia", "agrarian", "agrarianism", "agree","agreeable", "agreeableness", "agreeably", "agreed", "agreeing", "agreement", "agreements", "agreer", "agrees", "agribusiness",
"agricultural", "agriculturally", "agriculture", "agriculturist", "agriculturists", "agrochemical", "agronomic", "agronomist", "agronomists", "agronomy",
"aground", "ague", "agues", "ahead", "ahem", "ahmadabad", "ahoy", "aida", "aide", "aided",
"aider", "aiders", "aides", "aiding", "aids", "aigrette", "aigrettes", "aikido", "ailanthus", "ailanthuses",
"ailed", "aileron", "ailerons", "ailing", "ailment", "ailments", "ails", "aimed", "aiming", "aimless",
"aimlessly", "aimlessness", "aims", "airborne", "airbrush", "airbrushed", "airbrushes", "airbrushing", "airbus", "airbuses",
"aircraft", "aircrew", "aircrews", "airdrome", "airdromes", "airdrop", "aired", "airedale", "airedales", "aires",
"airfare", "airfield", "airfields", "airflow", "airfoil", "airfoils", "airframe", "airframes", "airier", "airiest",
"airily", "airiness", "airing", "airings", "airless", "airlift", "airlifted", "airlifting", "airlifts", "airline",
"airliner", "airliners", "airlines", "airlock", "airlocks", "airmail", "airman", "airmen", "airplane", "airplanes",
"airplay", "airport", "airports", "airs", "airship", "airships", "airsick", "airsickness", "airspace", "airspeed",
"airspeeds", "airstrip", "airstrips", "airtight", "airtime", "airwaves", "airway", "airways", "airworthiness", "airworthy",
"airy", "aisle", "aisles", "aitken", "ajar", "ajax", "akimbo", "akin", "akron", "alabama",
"alabamian", "alabaster", "alacrity", "aladdin", "alai", "alamo", "alamos", "alan", "alarm","alarmed", "alarming", "alarmingly", "alarmist", "alarmists", "alarms", "alas", "alaska", "alaskan", "alaskans",
"albacore", "albania", "albanian", "albanians", "albany", "albatross", "albatrosses", "albeit", "albert", "alberta",
"albinism", "albino", "albinos", "albs", "album", "albumen", "albumin", "albums", "albuquerque", "alcalde",
"alcaldes", "alcatraz", "alcazar", "alchemist", "alchemists", "alchemy", "alcohol", "alcoholic", "alcoholics", "alcoholism",
"alcohols", "alcove", "alcoves", "alder", "alderman", "aldermen", "aldernay", "alders", "aleatory", "alec",
"aleck", "alecks", "alehouse", "alembic", "alembics", "aleppo", "alert", "alerted", "alerting", "alertly",
"alertness", "alerts", "ales", "aleutian", "aleuts", "alewife", "alewives", "alex", "alexander", "alexandra",
"alexandria", "alexandrian", "alexandrine", "alexandrines", "alexia", "alexis", "alfa", "alfalfa", "alfas", "alfred",
"alfresco", "alga", "algae", "algaecide", "algaecides", "algarve", "algebra", "algebraic", "algebraically", "algeria",
"algerian", "algerians", "algernon", "algid", "algiers", "alginate", "alginates", "algol", "algorithm", "algorithmic",
"algorithmically", "algorithms", "alhambra", "alia", "alias", "aliases", "alibi", "alibis", "alice", "alicia",
"alien", "alienable", "alienage", "alienate", "alienated", "alienates", "alienating", "alienation", "alienator", "alienators",
"aliened", "alienee", "alienees", "aliening", "alienism", "alienor", "alienors", "aliens", "alight", "alighted",
"alighting", "alights", "align", "aligned", "aligning", "alignment", "alignments", "aligns", "alike","aliment", "alimenta", "alimentary", "alimentation", "aliments", "alimonies", "alimony", "aliphatic", "aliquem", "aliquot",
"alison", "alistair", "alit", "aliter", "aliunde", "alive", "alizarin", "alkali", "alkaline", "alkalinity",
"alkalinize", "alkalinized", "alkalinizes", "alkalinizing", "alkalis", "alkalize", "alkalized", "alkalizing", "alkaloid", "alkaloids",
"alkaloses", "alkalosis", "alkyd", "alkyds", "alkyl", "alkyls", "allah", "allan", "allay", "allayed",
"allaying", "allayment", "allays", "allegata", "allegation", "allegations", "allege", "alleged", "allegedly", "alleges",
"allegiance", "allegiances", "alleging", "allegoric", "allegorical", "allegorically", "allegories", "allegorize", "allegorized", "allegorizes",
"allegorizing", "allegory", "allegro", "allegros", "allele", "alleles", "allelic", "alleluia", "alleluias", "allemande",
"allemandes", "allen", "allergen", "allergenic", "allergens", "allergic", "allergies", "allergist", "allergists", "allergy",
"alleviate", "alleviated", "alleviates", "alleviating", "alleviation", "alleviator", "alleviators", "alley", "alleys", "alleyway",
"alleyways", "alliance", "alliances", "allied", "allies", "alligator", "alligators", "allison", "alliterate", "alliterated",
"alliterates", "alliterating", "alliteration", "alliterations", "alliterative", "allocable", "allocate", "allocated", "allocates", "allocating",
"allocation", "allocations", "allocatur", "allocution", "allocutions", "allodial", "allograph", "allographs", "allomorph", "allomorphic",
"allomorphs", "allonge", "allonges", "allonym", "allonyms", "allopathic", "allophone", "allophones", "allophonic", "allot",
"allotment", "allotments", "allotrope", "allotropes", "allotropic", "allotropy", "allots", "allotted", "allottee", "allottees",
"allotting", "allow","allowable", "allowably", "allowance", "allowances", "allowed", "allowing", "allows", "alloy", "alloyed", "alloying",
"alloys", "allspice", "allude", "alluded", "alludes", "alluding", "allure", "allured", "allurement", "allurements",
"allures", "alluring", "alluringly", "allusion", "allusions", "allusive", "allusively", "allusiveness", "alluvia", "alluvial",
"alluvion", "alluvium", "alluviums", "ally", "allying", "alma", "almanac", "almanacs", "almaria", "almighty",
"almoigne", "almond", "almonds", "almoner", "almoners", "almost", "alms", "aloe", "aloes", "aloft",
"aloha", "alone", "aloneness", "along", "alongside", "aloof", "aloofly", "aloofness", "aloud", "alpaca",
"alpacas", "alpenhorn", "alpenhorns", "alpenstock", "alpenstocks", "alpha", "alphabet", "alphabetic", "alphabetical", "alphabetically",
"alphabetization", "alphabetize", "alphabetized", "alphabetizes", "alphabetizing", "alphabets", "alphanumeric", "alphanumerically", "alphas","alpine", "alpinism", "alpinist", "alpinists", "alps", "already", "alright", "alsace", "alsatian", "alsatians",
"also", "altar", "altarpiece", "altarpieces", "altars", "alter", "alterable", "alteration", "alterations", "altercate",
"altercated", "altercates", "altercating", "altercation", "altercations", "altered", "altering", "alterius", "alternat", "alternate",
"alternated", "alternately", "alternates", "alternating", "alternation", "alternations", "alternative", "alternatively", "alternatives", "alternator",
"alternators", "alternats", "alters", "althea", "althorn", "althorns", "although", "altimeter", "altimeters", "altitude",
"altitudes", "alto", "altocumuli", "altocumulus", "altogether", "altos", "altostrati", "altostratus", "altruism", "altruist",
"altruistic", "altruistically", "altruists", "alts", "alum", "aluminium", "aluminize", "aluminized", "aluminizes", "aluminizing",
"aluminum", "alumna", "alumnae", "alumni", "alumnus", "alveolar", "alveoli", "alveolus", "alvin", "always",
"alwinton", "alyssum", "alyssums", "alzheimer", "amadeus", "amalgam", "amalgamate", "amalgamated", "amalgamates", "amalgamating",
"amalgamation", "amalgamations", "amalgams", "amanda", "amanita", "amanitas", "amanuenses", "amanuensis", "amaranth", "amaranthine",
"amaranths", "amarillo", "amaryllis", "amaryllises", "amass", "amassed", "amasses", "amassing", "amassment", "amateur",
"amateurish", "amateurishly", "amateurishness", "amateurism", "amateurs", "amatory", "amax", "amaze", "amazed", "amazement",
"amazes", "amazing", "amazingly", "amazon", "amazonian", "amazons", "ambassador", "ambassadorial", "ambassadors", "ambassadorship",
"ambassadorships", "amber", "ambergris", "ambiance", "ambidexter", "ambidexterity", "ambidexters", "ambidextrous", "ambidextrously", "ambient",
"ambiguities", "ambiguity", "ambiguous", "ambiguously", "ambiguousness", "ambit", "ambition", "ambitions", "ambitious", "ambitiously",
"ambitiousness", "ambits", "ambivalence", "ambivalent", "amble", "ambled", "ambler", "amblers", "ambles", "ambling",
"ambrosia", "ambrosial", "ambulance", "ambulances", "ambulant", "ambulate", "ambulated", "ambulates", "ambulating", "ambulatory",
"ambuscade", "ambuscades", "ambush", "ambushed", "ambusher", "ambushers", "ambushes", "ambushing", "amebic", "ameliorate",
"ameliorated", "ameliorates", "ameliorating", "amelioration", "ameliorative", "ameliorator", "amen", "amenability", "amenable", "amenably", "amend", "amendatory", "amended", "amending", "amendment", "amendments", "amends", "amenities", "amenity", "amenorrhoea", "amerce", "amerced",
"amercement", "amercements", "amerces", "amercing", "america", "american", "americana", "americanism", "americanisms", "americanization", "americanize", "americanized", "americanizes", "americanizing", "americans",
"americium", "amerindian", "amerindians", "amethyst", "amethystine", "amethysts", "amex", "amharic", "amiability", "amiable", "amiably", "amiantus", "amica", "amicability", "amicable",
"amicably", "amici", "amicus", "amid", "amide", "amides", "amidships", "amidst", "amies", "amigo", "amigos", "amine", "amines", "amino", "amish",
"amiss", "amissa", "amities", "amitosis", "amitotic", "amity", "amman", "ammeter", "ammeters", "ammo", "ammonia", "ammoniac", "ammoniated", "ammoniates", "ammonite",
"ammonites", "ammonium", "ammunition", "ammunitions", "amnesia", "amnesiac", "amnesiacs", "amnestied", "amnesties", "amnesty", "amnestying", "amniocentesis", "amnion", "amniotic", "amoebae",
"amoebas", "amok", "among", "amongst", "amontillado", "amoral", "amorality", "amore", "amoris", "amorist", "amorists", "amorous", "amorously", "amorousness", "amorphous",
"amorphously", "amortization", "amortize", "amortized", "amortizement", "amortizes", "amortizing", "amos", "amotion", "amount", "amounted", "amounting", "amounts", "amour", "amours",
"amperage", "amperages", "ampere", "amperes", "ampersand", "ampersands", "amphetamine", "amphetamines", "amphibian", "amphibians", "amphibious", "amphibole", "amphiboles", "amphitheater", "amphitheaters",
"amphora", "amphorae", "ample", "ampleness", "ampler", "amplest", "amplification", "amplifications", "amplified","amplifier", "amplifiers", "amplifies", "amplify", "amplifying", "amplitude", "amplitudes", "amply", "ampoule", "ampoules", "amps", "amputate", "amputated", "amputates", "amputating",
"amputation", "amputations", "amputee", "amputees", "amritsar", "amstar", "amsted", "amsterdam", "amtrak", "amuck", "amulet", "amulets", "amuse", "amused", "amusedly",
"amusement", "amusements", "amuses", "amusing", "amusingly", "amyl", "amylase", "amylases", "amylopsin", "anabaptism", "anabaptist", "anabaptists", "anabolic", "anabolism", "anachronism",
"anachronisms", "anachronistic", "anachronistically", "anaconda", "anacondas", "anaerobe", "anaerobes", "anaerobic", "anaesthetize", "anaesthetized", "anaesthetizes", "anaesthetizing", "anagogic", "anagram", "anagramming",
"anagrams", "anaheim", "anal", "analeptic", "analeptics", "analgesia", "analgesic", "analgesics", "analog", "analogies", "analogize", "analogized", "analogizes", "analogizing", "analogous",
"analogously", "analogue", "analogues", "analogy", "analyses", "analysis", "analyst", "analysts", "analytic", "analytical", "analytically", "analyticity", "analyzable", "analyze", "analyzed",
"analyzer", "analyzers", "analyzes", "analyzing", "anapest", "anapestic", "anapests", "anaphase", "anaphora", "anaphoric", "anaphors", "anaphrodisiac", "anaphrodisiacs", "anaphylactic", "anaphylaxis",
"anarchic", "anarchical", "anarchism", "anarchist", "anarchistic", "anarchists", "anarchy", "anastasia", "anastigmatic", "anathema", "anathematize", "anathematized", "anathematizes", "anathematizing", "anatolia",
"anatomic", "anatomical", "anatomically", "anatomies", "anatomist", "anatomists", "anatomize", "anatomized", "anatomizes", "anatomizing","anatomy", "ancestor", "ancestors", "ancestral", "ancestrally", "ancestries", "ancestry", "anchor", "anchorage", "anchorages", "anchored", "anchoring", "anchorite", "anchorites", "anchorman",
"anchormen", "anchors", "anchorwoman", "anchorwomen", "anchovies", "anchovy", "ancient", "ancientness", "ancients", "ancillaries", "ancillary", "andalusia", "andalusian", "andante", "andantes",
"andantino", "andantinos", "andean", "andersen", "anderson", "andes", "andiron", "andirons", "andorra", "andover", "andrea", "andrew", "andrews", "androgen", "androgens",
"androgynous", "androgyny", "android", "androids", "andromeda", "ands", "andy", "anecdotal", "anecdotally", "anecdote", "anecdotes", "anemia", "anemic", "anemometer", "anemometers",
"anemone", "anemones", "anent", "aneroid", "anesthesia", "anesthesiologist", "anesthesiologists", "anesthesiology", "anesthetic", "anesthetically", "anesthetics", "anesthetist", "anesthetists", "anesthetization", "anesthetized",
"aneurysm", "aneurysms", "anew", "angary", "angel", "angela", "angeles", "angelfish", "angelic", "angelica", "angelical", "angelically", "angelicas", "angeline", "angels",
"angelus", "angeluses", "anger", "angered", "angering", "angers", "angina", "angiosperm", "angiosperms", "angle", "angled", "angler", "anglers", "angles", "angli", "angliae",
"anglican", "anglicanism", "anglicans", "anglicism", "anglicization", "anglicize", "anglicized", "anglicizes", "anglicizing", "angling", "anglo", "anglophile", "anglophiles", "anglophobia", "anglophone",
"anglophones", "angola", "angolan", "angolans", "angora", "angoras", "angostura", "angrier", "angriest", "angrily", "angry", "angst", "angstrom", "angstroms", "anguilla",
"anguish", "anguished", "anguishes", "anguishing", "angular", "angularities", "angularity", "angus", "anhydride", "anhydrides", "anhydrite", "anhydrous", "aniline", "anima", "animadversion",
"animadversions", "animadvert", "animadverted", "animadverting", "animadverts", "animal", "animalcule", "animalcules", "animalism", "animals", "animas", "animate", "animated", "animatedly", "animates",
"animating", "animation", "animator", "animators", "animism", "animist", "animistic", "animists", "animo", "animosities", "animosity", "animus", "anion", "anionic", "anions",
"anise", "aniseed", "aniseeds", "anises", "anisette", "anisettes", "anisotropy", "anita", "anjou", "ankara", "ankle", "anklebone", "anklebones", "ankles", "anklet",
"anklets", "anna", "annalist", "annalists", "annals", "annapolis", "annapurna", "anne", "anneal", "annealed", "annealing", "anneals", "annelid", "annelids", "annette",
"annex", "annexation", "annexations", "annexed", "annexes", "annexing", "anni", "annie", "annihilate", "annihilated", "annihilates", "annihilating", "annihilation", "annihilations", "annihilator",
"annihilators", "annis", "anniversaries", "anniversary", "anno", "annos", "annotate", "annotated", "annotates", "annotating", "annotation", "annotations", "annotator", "annotators", "announce",
"announced", "announcement", "announcements", "announcer", "announcers", "announces", "announcing", "annoy", "annoyance", "annoyances", "annoyed", "annoying", "annoyingly", "annoys", "annual",
"annualize", "annualized", "annualizes", "annualizing", "annually", "annuals", "annuitant", "annuitants", "annuities", "annuity", "annul", "annular", "annuli", "annulled", "annulling",
"annulment", "annulments", "annuls", "annulus", "annum", "annunciation", "anode", "anodes", "anodize", "anodized", "anodizes", "anodizing", "anodyne", "anodynes", "anoint",
"anointed", "anointing", "anoints", "anomalies", "anomalistic", "anomalous", "anomaly", "anomie", "anon", "anonyme", "anonymity", "anonymous", "anonymously", "anopheles", "anorak",
"anoraks", "anorectic", "anorectics", "anorexia", "anorexic", "anorexics", "anorthic", "another", "anoxia", "anoxic", "ansi", "answer", "answerable", "answerably", "answered",
"answering", "answers", "antacid", "antacids", "antagonism", "antagonisms", "antagonist", "antagonistic", "antagonistically", "antagonists", "antagonize", "antagonized", "antagonizes", "antagonizing", "antarctic",
"antarctica", "ante", "anteater", "anteaters", "antecedence", "antecedent", "antecedents", "antechamber", "antechambers", "anted", "antedate", "antedated", "antedates", "antedating", "antediluvian",
"antediluvians", "anteing", "antelope", "antelopes", "antemeridian", "antenatal", "antenna", "antennae", "antennas", "antenuptial", "antepenult", "antepenultimate", "antepenults", "anterior",
"anteroom", "anterooms", "antes", "anthem", "anthems", "anther", "anthers", "anthill", "anthills", "anthologies", "anthologist", "anthologists", "anthologize", "anthologized", "anthologizes",
"anthologizing", "anthology", "anthony", "anthracite", "anthrax", "anthropocentric", "anthropoid", "anthropoids", "anthropological", "anthropologically", "anthropologist", "anthropologists", "anthropology", "anthropometries", "anthropometry",
"anthropomorphic", "anthropomorphism", "anthropomorphous", "anti", "antibacterial", "antiballistic", "antibes", "antibiosis", "antibiotic", "antibiotics", "antibodies", "antibody", "antic", "antichrist", "anticipant",
"anticipate","anticipates", "anticipating", "anticipation", "anticipator", "anticipators", "anticipatory", "anticlerical", "anticlericalism", "anticlimactic", "anticlimactically", "anticlimax", "anticlimaxes", "anticline", "anticlines", "anticlockwise",
"anticoagulant", "anticoagulants", "anticoagulation", "anticorrosive", "antics", "anticyclone", "anticyclones", "antidepressant", "antidepressants", "antidote", "antidotes", "antifreeze", "antigen", "antigenic", "antigens",
"antigraphy", "antigua", "antigun", "antihero", "antiheroes", "antihistamine", "antihistamines", "antiknock", "antiknocks", "antilles", "antilogarithm", "antilogarithms", "antimacassar", "antimacassars", "antimony",
"antineutrino", "antineutrinos", "antineutron", "antineutrons", "antinomies", "antinomy", "antioxidant", "antioxidants", "antiparticle", "antiparticles", "antipasti", "antipasto", "antipastos", "antipathetic", "antipathies",
"antipathy", "antiperspirant", "antiperspirants", "antiphon", "antiphonal", "antiphonies", "antiphons", "antiphony", "antiphrasis", "antipodal", "antipode", "antipodes", "antipolice", "antiproton", "antiprotons",
"antipyretic", "antipyretics", "antiquarian", "antiquarians", "antiquaries", "antiquary", "antiquate", "antiquated", "antiquates", "antiquating", "antiquation", "antique", "antiques", "antiquities", "antiquity",
"antiriot", "antis", "antisepsis", "antiseptic", "antiseptically", "antiseptics", "antiserum", "antiserums", "antislavery", "antisocial", "antisocially", "antispasmodic", "antistatic", "antisubmarine", "antitank",
"antitheft", "antitheses", "antithesis", "antithetical", "antithetically", "antitoxin", "antitoxins", "antitrust", "antivenin", "antivenins", "antivivisection", "antiwar", "antler", "antlered", "antlers",
"antoine", "antoinette", "anton", "antonio", "antonomasia", "antony", "antonym", "antonymous", "antonyms", "antrim", "ants", "antwerp", "anus", "anuses", "anvil",
"anvils", "anxieties", "anxiety", "anxious", "anxiously", "anxiousness", "anybody", "anyhow", "anymore", "anyone", "anyplace", "anything", "anytime", "anyway", "anywhere",
"anywise", "aorta", "aortal", "aortas", "aortic", "aoudad", "aoudads", "apace", "apache", "apaches", "apanage", "apanages", "apart", "apartheid", "apartment",
"apartments", "apathetic", "apathetically", "apathy", "aped", "apennine", "apennines", "aperitif", "aperitifs", "aperture", "apertures", "apes", "apex", "apexes", "aphasia",
"aphasiac", "aphasic", "aphasics", "aphelia", "aphelion", "aphid", "aphids", "aphonia", "aphorism", "aphorisms", "aphoristic", "aphoristically", "aphorize", "aphorized", "aphorizes",
"aphorizing", "aphrodisiac", "aphrodisiacs", "aphrodite", "apia", "apiaries", "apiarist", "apiarists", "apiary", "apical", "apices", "apiculture", "apiece", "aping", "apis",
"apish", "aplenty", "aplomb", "apnea", "apneas", "apocalypse", "apocalypses", "apocalyptic", "apocrypha", "apocryphal", "apogean", "apogee", "apogees", "apolitical", "apolitically",
"apollo", "apologetic", "apologetically", "apologetics", "apologia", "apologias", "apologies", "apologist", "apologists", "apologize", "apologized", "apologizes", "apologizing", "apology", "apoplectic",
"apoplectically", "apoplexy", "apostasies", "apostasy", "apostate", "apostates", "apostatize", "apostatized", "apostatizes", "apostatizing", "apostle", "apostles", "apostolic", "apostrophe", "apostrophes",
"apostrophize", "apostrophized", "apostrophizes", "apostrophizing", "apothecaries", "apothecary", "apothem", "apothems", "apotheoses", "apotheosis", "apotheosize", "apotheosized", "apotheosizes", "apotheosizing",
"appalachia", "appalachian", "appalachians", "appall", "appalled", "appalling", "appallingly", "appalls", "appaloosa", "appaloosas", "appanage", "appanages", "apparatus", "apparatuses", "apparel",
"appareled", "appareling", "apparels", "apparent", "apparently", "apparition", "apparitions", "appeal", "appealable", "appealed", "appealing", "appealingly", "appeals", "appear", "appearance", "appearances",
"appeared", "appearing", "appears", "appease", "appeased", "appeasement", "appeaser", "appeasers", "appeases", "appeasing", "appellant", "appellants", "appellate", "appellation", "appellations",
"appellees", "append", "appendage", "appendages", "appendant", "appendants", "appendectomies", "appendectomy", "appended", "appendices", "appendicitis", "appending", "appendix", "appendixes", "appends",
"apperception", "appertain", "appertained", "appertaining", "appertains", "appestat", "appestats", "appetite", "appetites", "appetizer", "appetizers", "appetizing", "appetizingly", "applaud",
"applauded", "applauding", "applauds", "applause", "apple", "apples", "appliance", "appliances", "applicability", "applicable", "applicant", "applicants", "application", "applications", "applicator",
"applicators", "applied", "applies", "apply", "applying", "appoint", "appointed", "appointee", "appointees", "appointing", "appointive", "appointment", "appointments", "appointor", "appointors",
"appoints", "apportion", "apportioned", "apportioning", "apportionment", "apportions", "apposer", "apposers", "apposite", "appositely", "apposition", "appositions", "appositive", "appositives", "appraisal",
"appraisals", "appraise", "appraised", "apraisement", "appraisements", "appraiser", "appraisers", "appraises", "appraising", "appraisingly", "appreciable", "appreciably", "appreciate", "appreciated", "appreciates", "appreciating",
"appreciation", "appreciative", "appreciatively", "apprehend", "apprehended", "apprehending", "apprehends", "apprehensible", "apprehension", "apprehensions", "apprehensive", "apprehensively", "apprentice", "apprenticed", "apprentices",
"apprenticeship", "apprenticeships", "apprenticing", "apprise", "apprised", "apprises", "apprising", "approach", "approachability", "approachable", "approached", "approaches", "approaching", "approbation", "appropriate", "appropriated",
"appropriately", "appropriateness", "appropriates", "appropriating", "appropriation", "appropriations", "appropriator", "appropriators", "approval", "approvals", "approve", "approved", "approver", "approvers", "approves",
"approving", "approvingly", "approximate", "approximated", "approximately", "approximates", "approximating", "approximation", "approximations", "appurtenance", "appurtenances", "appurtenant", "apraxia", "apricot", "apricots",
"april", "apron", "aprons", "apropos", "aprs", "apse", "apses", "aptitude", "aptitudes", "aptly", "aptness","aqua", "aquamarine", "aquamarines", "aquanaut", "aquanauts", "aquaplane", "aquaplaned", "aquaplanes", "aquaplaning", "aquaria", "aquarium", "aquariums", "aquarius", "aquatic", "aquatics",
"aquatint", "aquatinted", "aquatinting", "aquatints", "aqueduct", "aqueducts", "aqueous", "aquifer", "aquifers", "aquilia", "aquiline", "aquinas", "aquitaine", "arab", "arabesque",
"arabesques", "arabia", "arabian", "arabians", "arabic", "arable", "arabs", "arachnid", "arachnids", "aragon", "aragonite", "aramaic", "arapaho", "arapahos", "arbiter",
"arbiters", "arbitrable", "arbitrage", "arbitrages", "arbitrageur", "arbitrageurs", "arbitrament", "arbitraments", "arbitrarily", "arbitrariness", "arbitrary", "arbitrate", "arbitrated", "arbitrates", "arbitrating",
"arbitration", "arbitrator", "arbitrators", "arbor", "arboreal", "arboreta", "arboretum", "arboretums", "arboriculture", "arboricultures", "arbors", "arborvitae", "arbutus", "arbutuses", "arcade",
"arcades", "arcadian", "arcadians", "arcane", "arced", "arch", "archaeological", "archaeologically", "archaeologist", "archaeologists", "archaeology", "archaeopteryx", "archaeopteryxes", "archaic", "archaism",
"archaisms", "archaistic", "archaize", "archaized", "archaizes", "archaizing", "archangel", "archangels", "archbishop", "archbishopric", "archbishoprics", "archbishops", "archdeacon", "archdeacons", "archdiocese",
"archdioceses", "archduchess", "archduchesses", "archduke", "archdukes", "arched", "archer", "archers", "archery", "arches", "archetypal", "archetype", "archetypes", "archibald", "archie",
"archiepiscopal", "archimedes", "arching", "archipelago", "archipelagos", "architect", "architectonic", "architectonics", "architects", "architectural", "architecturally", "architecture", "architectures", "architrave", "archival",
"archive", "archived", "archives", "archiving", "archivist", "archivists", "archivolt", "archivolts", "archly", "archway", "archways", "arcing", "arcs", "arctic", "arden",
"ardency", "ardennes", "ardent", "ardently", "ardor", "arduous", "arduously", "arduousness", "area", "areas", "areaway", "areaways", "arena", "arenas", "areopagus",
"arere", "argentina", "argentine", "argentinean", "argentineans", "argentines", "argentinian", "argentite", "argh", "argil", "argils", "argon", "argonaut", "argonauts", "argos",
"argot", "argots", "arguable", "arguably", "argue", "argued", "arguer", "arguers", "argues", "arguing", "argument", "argumentation", "argumentative", "argumentatively", "arguments",
"argus", "argyle", "argyles", "argyll", "aria", "arias", "arid", "aridity", "aries", "aright", "aril", "arils", "arise", "arisen", "arises",
"arising", "aristech", "aristocracies", "aristocracy", "aristocrat", "aristocratic", "aristocratical", "aristocratically", "aristocrats", "aristotelian", "aristotelians", "aristotle", "arithmetic", "arithmetical", "arithmetically",
"arizona", "arkansan", "arkansas", "arks", "arles", "arlington", "armada", "armadas", "armadillo", "armadillos", "armageddon", "armagnac", "armament", "armaments", "armata",
"armature", "armatures", "armband", "armbands", "armchair", "armchairs", "armed", "armenia", "armenian", "armenians", "armful", "armfuls", "armhole", "armholes", "armies",
"arming", "armis", "armistice", "armistices", "armlet", "armlets", "armload", "armoire", "armoires", "armor", "armored", "armorial", "armoring", "armors", "armory",
"armour", "armpit", "armpits", "armrest", "armrests", "arms", "armstrong", "army", "arnica", "arnold", "aroma", "aromas", "aromatherapies", "aromatherapy", "aromatic",
"aromatics", "arose", "around", "arousal", "arouse", "aroused", "arouses", "arousing", "arpeggio", "arpeggios", "arraign", "arraigned", "arraigning", "arraignment", "arraignments",
"arraigns", "arrange", "arranged", "arrangement", "arrangements", "arranger", "arrangers", "arranges", "arranging", "arrant", "array", "arrayed", "arraying", "arrays", "arrearage",
"arrearages", "arrears", "arrest", "arrested", "arresting", "arrestingly", "arrests", "arrhythmia", "arrhythmic", "arrival", "arrivals", "arrive", "arrived", "arrives", "arriving",
"arrogance", "arrogant", "arrogantly", "arrogate", "arrogated", "arrogates", "arrogating", "arrogation", "arrondissement", "arrondissements", "arrow", "arrowhead", "arrowheads", "arrowroot", "arrowroots",
"arrows", "arroyo", "arroyos", "arsenal", "arsenals", "arsenate", "arsenic", "arsine", "arson", "arsonist", "arsonists", "artem", "arterial", "arteries", "arteriole",
"arterioles", "arteriosclerosis", "artery", "artesian", "artful", "artfully", "artfulness", "arthritic", "arthritics", "arthritis", "arthropod", "arthropods", "arthur", "arthurian", "artichoke",
"artichokes", "article", "articled", "articles", "articling", "articulate", "articulated", "articulately", "articulates", "articulating", "articulation", "articulations", "articulator", "articulators", "artier",
"artiest", "artifact", "artifacts", "artifice", "artificer", "artificers", "artifices", "artificial", "artificiality", "artificially", "artilleries", "artillerist", "artillerists", "artillery", "artily",
"artis", "artisan", "artisans", "artist", "artiste", "artistes", "artistic", "artistically", "artistry", "artists", "artless", "artlessly", "arts", "artwork", "artworks",
"arty", "aruba", "arum", "arvin", "aryan", "aryans", "aryl", "aryls", "asafetida", "asbestos", "asbestosis", "ascend", "ascendance", "ascendancy", "ascendant",
"ascendants", "ascended", "ascendency", "ascender", "ascenders", "ascending", "ascends", "ascension", "ascensions", "ascent", "ascents", "ascertain", "ascertainable", "ascertained", "ascertaining",
"ascertainment", "ascertains", "ascetic", "ascetically", "asceticism", "ascetics", "ascii", "ascorbic", "ascot", "ascots", "ascribable", "ascribe", "ascribed", "ascribes", "ascribing",
"ascription", "asepses", "asepsis", "aseptic", "asexual", "asexually", "ashamed", "ashamedly", "ashen", "ashes", "ashkenazi", "ashkenazim", "ashland", "ashlar", "ashlars",
"ashley", "ashore", "ashram", "ashrams", "ashton", "ashtray", "ashtrays", "ashy", "asia", "asian", "asians", "asiatic", "aside", "asides", "asimov",
"asinine", "asininity", "askance", "asked", "askew", "asking", "asks", "aslant", "asleep", "asocial", "asparagus", "aspartame", "aspect", "aspects", "aspen",
"aspens", "asperity", "asperse", "aspersed", "asperses", "aspersing", "aspersion", "aspersions", "asphalt", "asphodel", "asphyxia", "asphyxiate", "asphyxiated", "asphyxiates", "asphyxiating",
"asphyxiation", "aspic", "aspics", "aspidistra", "aspidistras", "aspirant", "aspirants", "aspirate", "aspirated", "aspirates", "aspirating", "aspiration", "aspirations", "aspirator", "aspirators",
"aspire", "aspired", "aspires", "aspirin", "aspiring", "aspirins", "asportavit", "asps", "assail", "assailable", "assailant", "assailants", "assailed", "assailing", "assails",
"assam", "assassin", "assassinate", "assassinated", "assassinates", "assassinating", "assassination", "assassinations", "assassins", "assault", "assaulted", "assaulting", "assaults", "assay", "assayed",
"assayer", "assayers", "assaying", "assays", "assegai", "assegais", "assemblage", "assemblages", "assemble", "assembled", "assembler", "assemblers", "assembles", "assemblies", "assembling",
"assembly", "assemblyman", "assemblymen", "assent", "assented", "assenting", "assents", "assert", "asserted", "asserting", "assertion", "assertions", "assertive", "assertively", "assertiveness", "assertory",
"asserts", "asses", "assess", "assessable", "assessed", "assesses", "assessing", "assessment", "assessments", "assessor", "assessors", "asset", "assets", "asseverate", "asseverated", "asseverates",
"asseverating", "asseveration", "asshole", "assholes", "assiduity", "assiduous", "assiduously", "assiduousness", "assign", "assignable", "assignation", "assignations", "assigned", "assignee", "assignees", "assigning",
"assignment", "assignments", "assignor", "assignors", "assigns", "assimilate", "assimilated", "assimilates", "assimilating", "assimilation", "assimilative", "assises", "assisi", "assist", "assistance",
"assistant", "assistants", "assistantship", "assistantships", "assisted", "assisting", "assists", "assize", "assizes", "associate", "associated", "associates", "associating", "association", "associations",
"associative", "associatively", "assonance", "assonant", "assort", "assorted", "assorting", "assortment", "assortments", "assorts", "assuage", "assuaged", "assuages", "assuaging", "assumable",
"assume", "assumed", "assumedly", "assumes", "assuming", "assumpsit", "assumpsits", "assumption", "assumptions", "assurance", "assurances", "assure", "assured", "assuredly", "assurer",
"assurers", "assures", "assuring", "assyria", "assyrian", "assyrians", "astatine", "aster", "asterisk", "asterisked", "asterisking", "asterisks", "asterism", "astern", "asteroid", "asteroids",
"asters", "asthenia", "asthma", "asthmatic", "asthmatically", "asthmatics", "astigmatic", "astigmatism", "astir", "aston", "astonish", "astonished", "astonishes", "astonishing", "astonishingly",
"astonishment", "astoria", "astound", "astounded", "astounding", "astoundingly", "astounds", "astragal", "astragals", "astrakhan", "astrakhans", "astral", "astray", "astride", "astringency", "astringent",
"astringently", "astringents", "astrodome", "astrodomes", "astrolabe", "astrolabes", "astrologer", "astrologers", "astrologic", "astrological", "astrologically", "astrology", "astronaut", "astronautic", "astronautics",
"astronauts", "astronomer", "astronomers", "astronomic", "astronomical", "astronomically", "astronomy", "astrophysical", "astrophysicist", "astrophysicists", "astrophysics", "astroturf", "asturias", "astute", "astutely",
"astuteness", "asuncion", "asunder", "aswan", "asylum", "asylums", "asymmetric", "asymmetrical", "asymmetrically", "asymmetries", "asymmetry", "asymptote", "asymptotes", "asymptotic", "asymptotically",
"asynchronies", "asynchronous", "asynchronously", "asynchrony", "asyndeton", "ataractic", "atavism", "atavistic", "ataxia", "ataxic", "atelier", "ateliers", "atheism", "atheist", "atheistic",
"atheists", "athena", "athenaeum", "athenaeums", "athenian", "athenians", "athens", "athirst", "athlete", "athletes", "athletic", "athletically", "athleticism", "athletics", "athwart",
"atkins", "atkinson", "atlanta", "atlantic", "atlantis", "atlas", "atlases", "atmosphere", "atmospheres", "atmospheric", "atmospherical", "atmospherically", "atmospherics", "atoll", "atolls",
"atom", "atomic", "atomically", "atomization", "atomize", "atomized", "atomizer", "atomizers", "atomizes", "atomizing", "atoms", "atonal", "atonality", "atonally", "atone",
"atoned", "atonement", "atones", "atoning", "atop", "atria", "atrium", "atriums", "atrocious", "atrociously", "atrociousness", "atrocities", "atrocity", "atrophied", "atrophies",
"atrophy", "atrophying", "atropine", "attach", "attachable", "attached", "attaches", "attaching", "attachment", "attachments", "attack", "attacked", "attacker", "attackers", "attacking",
"attacks", "attain", "attainability", "attainable", "attainder", "attained", "attaining", "attainment", "attainments", "attains", "attaint", "attainted", "attainting", "attaints", "attar",
"attars", "attempt", "attempted", "attempting", "attempts", "attend", "attendance", "attendant", "attendants", "attended", "attendee", "attendees", "attending", "attends", "attention",
"attentions", "attentive", "attentively", "attentiveness", "attenuate", "attenuated", "attenuates", "attenuating", "attenuation", "attest", "attestation", "attestations", "attested", "attesting", "attestor",
"attestors", "attests", "attic", "attics", "attire", "attired", "attires", "attiring", "attitude", "attitudes", "attitudinal", "attitudinize", "attitudinized", "attitudinizes", "attitudinizing",
"attorn", "attornare", "attorned", "attorney", "attorneys", "attorneyship", "attorning", "attornment", "attorns", "attract", "attractant", "attractants", "attracted", "attracting", "attraction",
"attractions", "attractive", "attractively", "attractiveness", "attracts", "attributable", "attributably", "attribute", "attributed", "attributes", "attributing", "attribution", "attributions", "attributive", "attributively",
"attrition", "attune", "attuned", "attunes", "attuning", "atwitter", "atypic", "atypical", "atypically","auburn", "auckland", "auction", "auctioned", "auctioneer", "auctioneers", "auctioning", "auctions", "auctorial", "audacious", "audaciously", "audacity", "audibility", "audible", "audibly",
"audience", "audiences", "audio", "audiocassette", "audiocassettes", "audiologist", "audiologists", "audiometer", "audiometers", "audiophile", "audiophiles", "audiotape", "audiotyping", "audiotypist", "audiovisual",
"audiovisuals", "audis", "audit", "audited", "auditing", "audition", "auditioned", "auditioning", "auditions", "auditor", "auditorium", "auditoriums", "auditors", "auditory", "audits",
"audrey", "auger", "augers", "aught", "augment", "augmentation", "augmentations", "augmentative", "augmented", "augmenting", "augments", "augur", "augured", "auguries", "auguring",
"augurs", "augury", "august", "augusta", "augusts", "auks", "aunt", "auntie", "aunties", "aunts", "aunty", "aura", "aural", "aurally", "auras",
"aureate", "aureole", "aureoles", "auricle", "auricles", "auricular", "auriferous", "aurora", "auroras", "auschwitz", "auscultation", "auspice", "auspices", "auspicious", "auspiciously",
"austere", "austerely", "austerities", "austerity", "austin", "austral", "australasia", "australia", "australian", "australians", "australopithecine", "australopithecus", "austria", "austrian", "austrians",
"autarchic", "autarchies", "autarchy", "autarkic", "autarkies", "autarky", "authentic", "authentically", "authenticate", "authenticated", "authenticates", "authenticating", "authentication", "authenticator", "authenticators",
"authenticity", "author", "authored", "authoress", "authoresses", "authorial", "authoring", "authoritarian", "authoritarianism", "authoritative", "authoritatively", "authorities", "authority", "authorization", "authorizations",
"authorize", "authorized", "authorizes", "authorizing", "authors", "authorship", "autism", "autistic", "autobahn", "autobahns", "autobiographic", "autobiographical", "autobiographically", "autobiographies", "autobiography",
"autoclave", "autoclaves", "autocollimator", "autocracies", "autocracy", "autocrat", "autocratic", "autocratically", "autocrats", "autocross", "autocrosses", "autocue", "autodidact", "autodidacts", "autograph",
"autographed", "autographic", "autographical", "autographing", "autographs", "autoharp", "autoharps", "automat", "automata", "automate", "automated", "automates", "automatic", "automatically", "automatics",
"automating", "automation", "automatism", "automaton", "automatons", "automobile", "automobiles", "automotive", "autonomic", "autonomies", "autonomous", "autonomously", "autonomy", "autopilot", "autopilots",
"autopsied", "autopsies", "autopsy", "autopsying", "autoptic", "autos", "autosuggestion", "autre", "autumn", "autumnal", "autumns", "auvergne", "auxiliaries", "auxiliary", "avail",
"availability", "available", "availed", "availing", "avails", "avalanche", "avalanched", "avalanches", "avalanching", "avant", "avarice", "avaricious", "avariciously", "avariciousness", "avatar",
"avatars", "avenge", "avenged", "avenger", "avengers", "avenges", "avenging", "avenue", "avenues", "aver", "average", "averaged", "averages", "averaging", "averment",
"averments", "averred", "averring", "avers", "averse", "aversely", "aversion", "aversions", "aversive", "avert", "averted", "averting", "averts", "avery", "avian",
"aviaries", "aviary", "aviation", "aviator", "aviators", "aviatrix", "aviatrixes", "aviculture", "avid", "avidity", "avidly", "avifauna", "avifaunas", "avignon", "avionics",
"aviv", "avocado", "avocados", "avocat", "avocation", "avocations", "avocet", "avocets", "avoid", "avoidable", "avoidably", "avoidance", "avoided", "avoiding", "avoids",
"avoirdupois", "avon", "avouch", "avouched", "avouches", "avouching", "avow", "avowal", "avowals", "avowed", "avowedly", "avowing", "avowry", "avowrys", "avows",
"avulse", "avulsed", "avulses", "avulsing", "avulsion", "avulsions", "avuncular", "await", "awaited", "awaiting", "awaits", "awake", "awaked", "awaken", "awakened",
"awakening", "awakenings", "awakens", "awakes", "awaking", "award", "awarded", "awarding", "awards", "aware", "awareness", "awash", "away", "awed", "awes",
"awesome", "awesomely", "awesomeness", "awful", "awfully", "awfulness", "awhile", "awing", "awkward", "awkwardly", "awkwardness", "awls", "awning", "awnings", "awoke",
"awoken", "awol", "awry", "axed", "axes", "axial", "axially", "axing", "axiom", "axiomatic", "axioms", "axis", "axle", "axles", "axon",
"axons", "ayatollah", "ayatollahs", "ayes", "azalea", "azaleas", "azerbaijan", "azerbaijani", "azerbaijanis", "azimuth", "azimuths", "azores", "aztec", "azure", "azurite",
"azurites", "baba", "babas", "babble", "babbled", "babbler", "babblers", "babbles", "babbling", "babe", "babel","babes", "babied", "babies", "baboon", "baboons", "babushka", "babushkas", "baby", "babyhood", "babying", "babyish", "babylon", "babylonian", "babylonians", "babysat",
"babysit", "babysits", "babysitter", "babysitters", "babysitting", "bacardi", "baccalaureate", "baccalaureates", "baccarat", "bacchanal", "bacchanalia", "bacchanalian", "bacchanalias", "bacchanals", "bacchus",
"bach", "bachelor", "bachelorhood", "bachelors", "bacillary", "bacilli", "bacillus", "back", "backache", "backaches", "backbend", "backbends", "backbit", "backbite", "backbiter", "backbiters",
"backbites", "backbiting", "backbitten", "backboard", "backboards", "backbone", "backbones", "backbreaking", "backchat", "backcloth", "backcomb", "backcombed", "backcombing", "backcombs", "backdate",
"backdated", "backdates", "backdating", "backdoors", "backdrop", "backdrops", "backed", "backer", "backers", "backfield", "backfields", "backfire", "backfired", "backfires", "backfiring",
"backgammon", "background", "backgrounds", "backhand", "backhanded", "backhandedly", "backhander", "backhanders", "backhands", "backing", "backings", "backlash", "backlashes", "backless", "backlight", "backlights",
"backlist", "backlists", "backlit", "backlog", "backlogged", "backlogging", "backlogs", "backorder", "backpack", "backpacked", "backpacker", "backpackers", "backpacking", "backpacks", "backrest",
"backrests", "backs", "backside", "backsides", "backslap", "backslapping", "backslaps", "backslash", "backslashes", "backslid", "backslide", "backslider", "backsliders", "backslides", "backsliding",
"backspace", "backspaced", "backspaces", "backspacing", "backspin", "backspins", "backstage", "backstairs", "backstitch", "backstitched", "backstitches", "backstitching", "backstop", "backstopping", "backstops",
"backstroke", "backstrokes", "backtrack", "backtracked", "backtracking", "backtracks", "backup", "backups", "backward", "backwardation", "backwardness", "backwards", "backwash", "backwashes", "backwater",
"backwaters", "backwoods", "backwoodsman", "backwoodsmen", "backyard", "backyards", "bacon", "bacons", "bacteria", "bacterial", "bactericidal", "bactericide", "bactericides", "bacteriologic", "bacteriological",
"bacteriologist", "bacteriologists", "bacteriology", "bacterium", "bade", "badge", "badger", "badgered", "badgering", "badgers", "badges", "badinage", "badlands", "badly", "badman",
"badmen", "badminton", "badmouth", "badmouthed", "badmouthing", "badmouths", "badness", "baffin", "baffle", "baffled", "bafflement", "baffler", "bafflers", "baffles", "baffling",
"bafflingly", "bagatelle", "bagatelles", "bagel", "bagels", "bagful", "baggage", "bagged", "baggier", "baggiest", "baggily", "bagginess", "bagging", "baggy", "baghdad",
"bagman", "bagmen", "bagpipe", "bagpiper", "bagpipers", "bagpipes", "bags", "baguette", "baguettes", "bahaman", "bahamas", "bahamian", "bahamians", "bahrain", "bahraini",
"bahrein", "bail", "bailable", "bailed", "bailee", "bailees", "bailer", "bailers", "bailey", "baileys", "bailiff", "bailiffs", "bailing", "bailiwick", "bailiwicks",
"bailment", "bailments", "bailor", "bailors", "bails", "bainbridge", "bairiki", "bait", "baited", "baiting", "baits", "baize", "bake", "baked", "bakelite", "baker",
"bakeries", "bakers", "bakery", "bakes", "baking", "baklava", "baklavas", "balaclava", "balaclavas", "balalaika", "balalaikas", "balance", "balanced", "balances", "balancing",
"balbriggan", "balconies", "balcony", "bald", "baldachin", "baldachins", "balder", "balderdash", "baldest", "balding", "baldly", "baldness", "baldpate", "baldpates", "baldric",
"baldrics", "baldwin", "bale", "balearic", "baled", "baleen", "baleful", "balefully", "baler", "balers", "bales", "balfour", "bali", "balinese", "baling",
"balk", "balkan", "balkanization", "balkanize", "balkanized", "balkanizes", "balkanizing", "balkans", "balked", "balkier", "balkiest", "balkiness", "balking", "balks", "balky",
"ball", "ballad", "balladeer", "balladeers", "ballads", "ballast", "balled", "ballerina", "ballerinas", "ballet", "balletomane", "balletomanes", "ballets", "balling", "ballistic",
"ballistics", "balloon", "ballooned", "ballooning", "balloonist", "balloonists", "balloons", "ballot", "balloted", "balloting", "ballots", "ballplayer", "ballplayers", "ballroom", "ballrooms",
"balls", "ballyhoo", "ballyhooed", "ballyhooing", "ballyhoos", "balm", "balmier", "balmiest", "balminess", "balms", "balmy", "baloney", "balsa", "balsam", "balsamic",
"balsams", "balsas", "baltic", "baltimore", "baltimorean", "baluster", "balusters", "balustrade", "balustrades", "balzac", "bamako", "bambi", "bambini", "bambino", "bambinos",
"bamboo", "bamboozle", "bamboozled", "bamboozler", "bamboozlers", "bamboozles", "bamboozling", "banal", "banalities", "banality", "banally", "banana", "bananas", "banc", "banco",
"bancos", "bancs", "band", "bandage", "bandaged", "bandages", "bandaging", "bandana", "bandanas", "bandanna", "bandannas", "bandar", "bandeau", "bandeaux",
"banded", "bandicoot", "bandicoots", "bandied", "bandies", "banding", "bandit", "banditry", "bandits", "bandleader", "bandleaders", "bandmaster", "bandmasters", "bandoleer", "bandoleers",
"bandolier", "bandoliers", "bands", "bandsman", "bandsmen", "bandstand", "bandstands", "bandwagon", "bandwagons", "bandwidth", "bandwidths", "bandy", "bandying", "bane", "baneful",
"banff", "bang", "bangalore", "banged", "banging", "bangkok", "bangladesh", "bangladeshi", "bangladeshis", "bangle", "bangles", "bangor", "bangs", "bangui", "banish",
"banished", "banishes", "banishing", "banishment", "banister", "banisters", "banjo", "banjoist", "banjoists", "banjos", "banjul", "bank", "bankbook", "bankbooks", "banked",
"banker", "bankers", "banking", "banknote", "banknotes", "bankroll", "bankrolled", "bankrolling", "bankrolls", "bankrupt", "bankruptcies", "bankruptcy", "bankrupted", "bankrupting", "bankrupts",
"banks", "banned", "banner", "banneret", "bannerets", "banners", "banning", "bannister", "bannisters", "banns", "banque", "banques", "banquet", "banqueted", "banqueting",
"banquets", "banquette", "banquettes", "bans", "banshee", "banshees", "banta", "bantam", "bantams", "bantamweight", "banter", "bantered", "bantering", "banters", "bantu",
"baobab", "baptism", "baptismal", "baptisms", "baptist", "baptisteries", "baptistery", "baptists", "baptize", "baptized", "baptizes", "baptizing", "barb", "barbados", "barbara",
"barbarian", "barbarians", "barbaric", "barbarism", "barbarisms", "barbarities", "barbarity", "barbarization", "barbarous", "barbarously", "barbecue", "barbecued", "barbecues", "barbecuing", "barbed",
"barbell", "barbells", "barber", "barbered", "barbering", "barbers", "barbershop", "barbican", "barbicans", "barbing", "barbital", "barbiturate", "barbiturates", "barbs", "barbuda",
"barcarole", "barcaroles", "barcelona", "barclaycard", "barclaycards", "barclays", "bard", "bards", "bare", "bareback", "bared", "barefaced", "barefoot", "barefooted", "barehanded",
"bareheaded", "barelegged", "barely", "bareness", "barer", "bares", "barest", "barflies", "barfly", "bargain", "bargained", "bargainee", "bargainees", "bargaining", "bargainor",
"bargainors", "bargains", "barge", "barged", "bargeman", "bargemen", "bargepole", "bargepoles", "barges", "barging", "baring", "barite", "baritone", "baritones", "barium",
"bark", "barked", "barkeeper", "barkeepers", "barker", "barkers", "barking", "barks", "barley", "barleycorn", "barleycorns", "barmaid", "barmaids", "barman", "barmen",
"barmier", "barmiest", "barmy", "barn", "barnabas", "barnabus", "barnacle", "barnacles", "barnard", "barns", "barnstorm", "barnstormed", "barnstormer", "barnstormers", "barnstorming",
"barnstorms", "barnyard", "barnyards", "barograph", "barographs", "barometer", "barometers", "barometric", "barometry", "baron", "baroness", "baronesses", "baronet", "baronetcy", "baronets", "baronial",
"baronies", "baronis", "barons", "baronum", "barony", "baroque", "barrack", "barracked", "barracking", "barracks", "barracuda", "barracudas", "barrage", "barraged", "barrages",
"barraging", "barrator", "barrators", "barratrous", "barratry", "barred", "barrel", "barreled", "barreling","barrels", "barren", "barrenness", "barrens", "barretor", "barretors", "barrette", "barrettes", "barricade", "barricaded", "barricades", "barricading", "barrier", "barriers", "barring",
"barrington", "barrio", "barrios", "barrister", "barristers", "barroom", "barrow", "barrows", "barry", "bars", "barstool", "barstools", "bart", "bartender", "bartenders",
"barter", "bartered", "bartering", "barters", "bartholomew", "bartlett", "bartok", "baryon", "baryons", "basal", "basalt", "basaltic", "base", "baseball", "baseballs",
"baseboard", "baseboards", "based", "basel", "baseless", "baseline", "baselines", "basely", "baseman", "basemen", "basement", "basements", "baseness", "basenji", "basenjis",
"baser", "bases", "basest", "bash", "bashed", "basher", "bashers", "bashes", "bashful", "bashfully", "bashfulness", "bashing", "basic", "basically", "basics",
"basil", "basilica", "basilicas", "basilisk", "basilisks", "basin", "basing", "basins", "basis", "bask", "basked", "basket", "basketball", "basketballs", "basketry",
"baskets", "basking", "basks", "basle", "basophilic", "basque", "basques", "basra", "bass", "basses", "basset", "bassets", "bassinet", "bassinets", "bassoon",
"bassoonist", "bassoonists", "bassoons", "basswood", "basswoods", "bast", "bastard", "bastardization", "bastardizations", "bastardize", "bastardized", "bastardizes", "bastardizing", "bastards",
"bastardy", "baste", "basted", "bastes", "bastille", "basting", "bastion", "bastions", "bata", "batas", "batavia", "batboys", "batch", "batches", "bate",
"bateau", "bateaux", "bated", "bates", "bath", "bathe", "bathed", "bather", "bathers", "bathes", "bathetic", "bathhouse", "bathhouses", "bathing", "bathos",
"bathrobe", "bathrobes", "bathroom", "bathrooms", "baths", "bathsheba", "bathtub", "bathtubs", "bathyscaph", "bathyscaphs", "bathysphere", "bathyspheres", "batik", "batiks", "bating",
"batiste", "batman", "batmen", "baton", "batons", "bator", "bats", "battalion", "battalions", "batted", "battel", "batten", "battenberg", "battened", "battening",
"battens", "batter", "battered", "batteries", "battering", "batters", "battery", "battier", "battiest", "batting", "battings", "battle", "battled", "battledore", "battledores",
"battlefield", "battlefields", "battlefront", "battleground", "battlegrounds", "battlement", "battlements", "battles", "battleship", "battleships", "battling", "batty", "batwing", "batwings", "bauble",
"baubles", "baud", "baulk", "baulked", "baulking", "baulks", "bausch", "bauxite", "bavaria", "bavarian", "bavarians", "bavarois", "bawd", "bawdier", "bawdiest",
"bawdily", "bawdiness", "bawds", "bawdy", "bawl", "bawled", "bawling", "bawls", "baxter", "bayberries", "bayberry", "bayed", "bayer", "baying", "bayonet",
"bayoneted", "bayoneting", "bayonets", "bayou", "bayous", "bays", "bazaar", "bazaars", "bazooka", "bazookas", "beach", "beachcomber", "beachcombers", "beached", "beaches",
"beachhead", "beachheads", "beaching", "beachwear", "beacon", "beacons", "bead", "beaded", "beadier", "beadiest", "beading", "beadle", "beadles", "beads", "beadsman",
"beadsmen", "beady", "beagle", "beagles", "beak", "beaked", "beaker", "beakers", "beaks", "beam", "beamed", "beaming", "beamingly", "beams", "bean", "beanfeasts",
"beanie", "beanies", "beanpole", "beanpoles", "beans", "beanstalk", "beanstalks", "bear", "bearable", "bearably", "beard", "bearded", "bearding", "beardless", "beards",
"beardsley", "bearer", "bearers", "beargarden", "beargardens", "bearing", "bearings", "bearish", "bearnaise", "bears", "bearskin", "bearskins", "beast", "beastlier", "beastliest",
"beastliness", "beastly", "beasts", "beat", "beaten", "beater", "beaters", "beatific", "beatifically", "beatification", "beatified", "beatifies", "beatify", "beatifying", "beating",
"beatings", "beatitude", "beatitudes", "beatnik", "beatniks", "beatrice", "beats", "beau", "beaufort", "beaujolais", "beauteous", "beautician", "beauticians", "beauties", "beautification",
"beautified", "beautifier", "beautifiers", "beautifies", "beautiful", "beautifully", "beautify", "beautifying", "beauty", "beaux", "beaver", "beavered", "beavering", "beavers", "bebop",
"becalm", "becalmed", "becalming", "becalms", "became", "because", "bechamel", "beck", "beckman", "beckon", "beckoned", "beckoning", "beckons", "becky", "becloud",
"beclouded", "beclouding", "beclouds", "become", "becomes", "becoming", "becomingly", "bedaub", "bedaubed", "bedaubing", "bedaubs", "bedazzle", "bedazzled", "bedazzlement", "bedazzles",
"bedazzling", "bedbug", "bedbugs", "bedchamber", "bedchambers", "bedclothes", "bedcover", "bedcovers", "bedded", "bedding", "bedeck", "bedecked", "bedecking", "bedecks", "bedel",
"bedels", "bedevil", "bedeviled", "bedeviling", "bedevilment", "bedevils", "bedew", "bedewed", "bedewing", "bedews", "bedfast", "bedfellow", "bedfellows", "bedizen", "bedizened",
"bedizening", "bedizens", "bedlam", "bedouin", "bedouins", "bedpan", "bedpans", "bedpost", "bedposts", "bedraggle", "bedraggled", "bedraggles", "bedraggling", "bedridden", "bedrock",
"bedroll", "bedrolls", "bedroom", "bedrooms", "beds", "bedside", "bedsides", "bedsitter", "bedsitters", "bedsore", "bedsores", "bedspread", "bedspreads", "bedspring", "bedsprings",
"bedstead", "bedsteads", "bedstraw", "bedstraws", "bedtime", "bedtimes", "beduin", "beduins", "beech", "beeches", "beef", "beefburger", "beefburgers", "beefcake", "beefed",
"beefier", "beefiest", "beefiness", "beefing", "beefs", "beefsteak", "beefsteaks", "beefy", "beehive", "beehives", "beekeeper", "beekeepers", "beekeeping", "beeline", "beelines",
"beelzebub", "been", "beep", "beeped", "beeper", "beepers", "beeping", "beeps", "beer", "beers", "bees", "beeswax", "beet", "beethoven", "beetle",
"beetled", "beetles", "beetling", "beetroot", "beetroots", "beets", "beeves", "befall", "befallen", "befalling", "befalls", "befell", "befit", "befits", "befitted",
"befitting", "befittingly", "befog", "befogged", "befogging", "befogs", "before", "beforehand", "befoul", "befouled", "befouling", "befouls", "befriend", "befriended", "befriending",
"befriends", "befuddle", "befuddled", "befuddlement", "befuddles", "befuddling", "began", "beget", "begets", "begetter", "begetters", "begetting", "beggar", "beggared", "beggaring",
"beggarly", "beggars", "beggary", "begged", "begging", "begin", "beginner", "beginners", "beginning", "beginnings", "begins", "begird", "begirding", "begirds", "begirt",
"begonia", "begonias", "begot", "begotten", "begrime", "begrimed", "begrimes", "begriming", "begrudge", "begrudged","begrudges", "begrudging", "begrudgingly", "begs", "beguile", "beguiled", "beguiler", "beguilers", "beguiles", "beguiling", "beguilingly", "begun", "behalf", "behalves", "behave",
"behaved", "behaves", "behaving", "behavior", "behavioral", "behaviorally", "behaviorism", "behaviorist", "behaviorists", "behaviors", "behead", "beheaded", "beheading", "beheads", "beheld",
"behemoth", "behemoths", "behest", "behind", "behinds", "behold", "beholden", "beholder", "beholders", "beholding", "beholds", "behoof", "behoove", "behooved", "behooves",
"behooving", "beige", "beijing", "being", "beings", "beirut", "bejewel", "bejeweled", "bejeweling", "bejewels", "belabor", "belabored", "belaboring", "belabors", "belated",
"belatedly", "belatedness", "belay", "belayed", "belaying", "belays", "belch", "belched", "belches", "belching", "beleaguer", "beleaguered", "beleaguering", "beleaguers", "belfast",
"belfries", "belfry", "belgian", "belgians", "belgium", "belgrade", "belie", "belied", "belief", "beliefs", "belies", "believable", "believably", "believe", "believed",
"believer", "believers", "believes", "believing", "belinda", "belittle", "belittled", "belittlement", "belittles", "belittling", "belize", "bell", "belladonna", "bellboy", "bellboys",
"belle", "belles", "bellflower", "bellflowers", "bellhop", "bellhops", "belli", "bellicose", "bellicosely", "bellicosity", "bellied", "bellies", "belligerence", "belligerency", "belligerent",
"belligerently", "belligerents", "bello", "bellow", "bellowed", "bellowing", "bellows", "bells", "bellum", "bellwether", "bellwethers", "belly", "bellyache", "bellyached", "bellyaches",
"bellyaching", "bellyful", "bellyfuls", "bellying", "belmopan", "belong", "belonged", "belonging", "belongings", "belongs", "belorussia", "belorussian", "beloved", "below", "belshazzar",
"belt", "belted", "belting", "belts", "beltway", "beltways", "beluga", "belvedere", "belvederes", "belying", "bembridge", "bemire", "bemired", "bemires", "bemiring", "bemis",
"bemoan", "bemoaned", "bemoaning", "bemoans", "bemuse", "bemused", "bemuses", "bemusing", "bench", "benched", "benches", "benching", "benchmark", "benchmarks", "bend", "bender",
"benders", "bending", "bends", "beneath", "benedict", "benedictine", "benedictines", "benediction", "benedictions", "benefaction", "benefactions", "benefactor", "benefactors", "benefactress",
"benefactresses", "benefice", "beneficence", "beneficent", "beneficently", "benefices", "beneficia", "beneficial", "beneficially", "beneficiaries", "beneficiary", "benefit", "benefited", "benefiting", "benefits",
"benelux", "benevolence", "benevolent", "benevolently", "bengal", "bengali", "bengalis", "benighted", "benign", "benignant", "benignity", "benignly", "benin", "benison", "benisons",
"benj", "benjamin", "bennett", "benson", "bent", "bentley", "bents", "benumb", "benumbed", "benumbing", "benumbs", "benz", "benzedrine", "benzene", "benzes", "benzoate",
"benzoic", "beowulf", "bequeath", "bequeathed", "bequeathing", "bequeaths", "bequest", "bequests", "berate", "berated", "berates", "berating", "berber", "berbers", "bereave",
"bereaved", "bereavement", "bereavements", "bereaves", "bereaving", "bereft", "beret", "berets", "berg", "bergamot", "bergamots", "bergen", "bergs", "beribboned", "beriberi",
"bering", "berkeley", "berkelium", "berkshire", "berlin", "berliner", "berlioz", "berm", "berms", "bermuda", "bermudan", "bermudans", "bermudas", "bern", "bernadette",
"bernard", "bernie", "bernoulli", "bernstein", "berries", "berry", "berserk", "berserks", "bert", "berth", "bertha", "berthed", "berthing", "berths", "bertie",
"berton", "bertram", "bertrand", "beryl", "beryllium", "beseech", "beseeched", "beseeches", "beseeching", "beseechingly", "beset", "besets", "besetting", "beside", "besides",
"besiege", "besieged", "besieger", "besiegers", "besieges", "besieging", "besmear", "besmeared", "besmearing", "besmears", "besmirch", "besmirched", "besmirches", "besmirching", "besoin",
"besotted", "besought", "bespangle", "bespangled", "bespangles", "bespangling", "bespatter", "bespattered", "bespattering", "bespatters", "bespeak", "bespeaking", "bespeaks", "bespectacled", "bespoke",
"bespoken", "besprinkle", "besprinkled", "besprinkles", "besprinkling", "bess", "best", "bested", "bestial", "bestialities", "bestiality", "bestiaries", "bestiary", "besting", "bestir",
"bestirred", "bestirring", "bestirs", "bestow", "bestowal", "bestowed", "bestowing", "bestows", "bestrew", "bestrewed", "bestrewing", "bestrewn", "bestrews", "bestridden", "bestride",
"bestrides", "bestriding", "bestrode", "bests", "beta", "betake", "betaken", "betakes", "betaking", "betas", "betel", "betelgeuse", "beth", "bethany", "bethink", "bethinking",
"bethinks", "bethlehem", "bethought", "betide", "betided", "betides", "betiding", "betimes", "betoken", "betokened", "betokening", "betokens", "betook", "betray", "betrayal", "betrayals",
"betrayed", "betrayer", "betrayers", "betraying", "betrays", "betroth", "betrothal", "betrothals", "betrothed", "betrothing", "betrothment", "betrothments", "betroths", "bets", "betsy",
"betted", "better", "bettered", "bettering", "betterment", "betters", "betties", "betting", "bettor", "bettors", "betts", "betty", "between", "betwixt", "bevel",
"beveled", "beveling", "bevels", "beverage", "beverages", "beverly", "bevies", "bevy", "bewail", "bewailed", "bewailing", "bewails", "beware", "bewared", "bewares",
"bewaring", "bewilder", "bewildered", "bewilderedly", "bewildering", "bewilderingly", "bewilderment", "bewilders", "bewitch", "bewitched", "bewitches", "bewitching", "bewitchingly", "beyond", "bezel",
"bezels", "bezique", "bhopal", "bhutan", "biannual", "biannually", "biarritz", "bias", "biased", "biases", "biasing", "biassed", "biassing", "biathlon", "biathlons",
"bibelot", "bibelots", "bible", "bibles", "biblical", "biblically", "bibliographer", "bibliographers", "bibliographic", "bibliographical", "bibliographies", "bibliography", "bibliophile", "bibliophiles", "bibs",
"bibulous", "bicameral", "bicarbonate", "bicarbonates", "bicentenaries", "bicentenary", "bicentennial", "bicentennials", "biceps", "bicker", "bickered", "bickering", "bickers", "biconcave", "bicultural",
"bicuspid", "bicuspids", "bicycle", "bicycled", "bicycles", "bicycling", "bicyclist", "bicyclists", "bidden", "bidder", "bidders", "biddies", "bidding", "biddy", "bide",
"bided", "bides", "bidet", "bidets", "biding", "bids", "biennia", "biennial", "biennially", "biennials", "biens", "bier", "biers", "bifocal", "bifocals", "bifurcate",
"bifurcated", "bifurcates", "bifurcating", "bifurcation", "bigamist", "bigamists", "bigamous", "bigamy", "bigger", "biggest", "bighead", "bigheaded", "bigheads", "bighorn", "bighorns",
"bight", "bights", "bigness", "bigot", "bigoted", "bigotry", "bigots", "bigwig", "bigwigs", "bijou", "bijoux", "bike", "biked", "biker", "bikers", "bikes",
"bikeway", "bikeways", "biking", "bikini", "bikinis", "bilabial", "bilabials", "bilan", "bilateral", "bilberries", "bilberry", "bilbo", "bilboes", "bile", "bilge", "bilinear",
"bilingual", "bilingualism", "bilious", "bilk", "bilked", "bilking", "bilks", "bill", "billam", "billboard", "billboards", "billed", "biller", "billers", "billet", "billeted",
"billeting", "billets", "billfold", "billfolds", "billhook", "billhooks", "billiard", "billiards", "billing", "billings", "billingsgate", "billion", "billionaire", "billionaires", "billions",
"billionth", "billionths", "billow", "billowed", "billowing", "billows", "billowy", "billposter", "billposters", "bills", "billy", "bimbo", "bimbos", "bimestrial", "bimetallism", "bimetallist",
"bimetallists", "bimolecular", "bimonthly", "binaries", "binary", "binaural", "bind", "binder", "binderies", "binders", "bindery", "binding", "bindings", "bindle", "bindles",
"binds", "bindweed", "binge", "binged", "bingeing", "binges", "bingo", "binnacle", "binnacles", "binocular", "binoculars", "binomial", "binomials", "bins", "binuclear",
"bioassay", "biochemical", "biochemist", "biochemistry", "biochemists", "biodegradable", "bioengineering", "biofeedback", "biogenesis", "biographer", "biographers", "biographic", "biographical", "biographically", "biographies",
"biography", "biohazard", "biohazards", "biologic", "biological", "biologically", "biologist", "biologists", "biology", "bioluminescence", "bioluminescent", "biome", "biomedical", "biomedicine", "biomes", "biometrics",
"bionic", "bionics", "biophysical", "biophysicist", "biophysicists", "biophysics", "biopic", "biopics", "biopsies", "biopsy", "biorhythm", "biorhythmic", "biorhythms", "bios", "bioscopy",
"biosphere", "biosynthesis", "biosynthesize", "biosynthesized", "biosynthetic", "biota", "biotechnological", "biotechnology", "biotic", "biotin", "bipartisan", "bipartite", "biped", "bipedal", "bipeds",
"biphenyl", "biplane", "biplanes", "birch", "birches", "bird", "birdbath", "birdbaths", "birdbrain", "birdbrains", "birdcage", "birdcages", "birdcall", "birdcalls", "birder",
"birders", "birdhouse", "birdhouses", "birdie", "birdied", "birdies", "birdlike", "birds", "birdseed", "birdseeds", "birdsong", "birdying", "birefringence", "birmingham", "birth", "birthday",
"birthdays", "birthed", "birthing", "birthmark", "birthmarks", "birthplace", "birthplaces", "birthright", "birthrights", "births", "birthstone", "birthstones", "biscay", "biscuit", "biscuits",
"bisect", "bisected", "bisecting", "bisection", "bisections", "bisector", "bisectors", "bisects", "bisexual", "bisexuality", "bisexually", "bisexuals", "bishop", "bishopdom", "bishopric",
"bishoprics", "bishops", "bismarck", "bismuth", "bison", "bisque", "bisques", "bissau", "bissell", "bissextile", "bissextiles", "bistro", "bistros", "bisulfate", "bitable",
"bite", "biter", "biters", "bites", "biting", "bitingly", "bits", "bitten", "bitter", "bitterer", "bitterest", "bitterly", "bittern", "bitterness", "bitterns",
"bitterroot", "bitterroots", "bitters", "bittersweet", "bitty", "bitumen", "bituminous", "bivalence", "bivalency", "bivalent", "bivalve", "bivalves", "bivouac", "bivouacked", "bivouacking",
"bivouacs", "biweekly", "biyearly", "bizarre", "blab", "blabbed", "blabber", "blabbered", "blabbering", "blabbermouth", "blabbermouths", "blabbers", "blabbing", "blabs", "black", "blackball",
"blackballed", "blackballing", "blackballs", "blackberries", "blackberry", "blackbird", "blackbirds", "blackboard", "blackboards", "blackbody", "blackcap", "blackcaps", "blackcurrant", "blackcurrants", "blackdamp",
"blacked", "blacken", "blackened", "blackening", "blackens", "blacker", "blackest", "blackguard", "blackguards", "blackhead", "blackheads", "blacking", "blackings", "blackish", "blackjack",
"blackjacks", "blackleg", "blacklist", "blacklisted", "blacklisting", "blacklists", "blackmail", "blackmailed", "blackmailer", "blackmailers", "blackmailing", "blackmails", "blackness", "blackout", "blackouts",
"blacks", "blacksmith", "blacksmiths", "blackthorn", "blackthorns", "blacktop", "bladder", "bladders", "bladderwrack", "blade", "bladed", "blades", "blahs", "blake", "blamable",
"blame", "blamed", "blameless", "blamelessly", "blames", "blameworthy", "blaming", "blanc", "blanch", "blanche", "blanched", "blanches", "blanching", "blancmange", "blancmanges",
"bland", "blander", "blandest", "blandish", "blandished", "blandishes", "blandishing", "blandishment", "blandishments", "blandly", "blandness", "blank", "blanked", "blanker", "blankest",
"blanket", "blanketed", "blanketing", "blankets", "blanking", "blankly", "blankness", "blanks", "blare", "blared", "blares", "blaring", "blarney", "blarneyed", "blarneying",
"blarneys", "blaspheme", "blasphemed", "blasphemer", "blasphemers", "blasphemes", "blasphemies", "blaspheming", "blasphemous", "blasphemously", "blasphemy", "blast", "blasted", "blaster", "blasting",
"blastoffs", "blasts", "blastula", "blastulas", "blatancy", "blatant", "blatantly", "blather", "blathered", "blathering", "blathers", "blatherskite", "blatherskites", "blaze", "blazed", "blazer",
"blazers", "blazes", "blazing", "blazingly", "blazon","blazoned","blazoning","blazons","bleach","bleached","bleacher","bleachers","bleaches","bleaching","bleak","bleaker","bleakest","bleakly","bleakness","blear"
,"bleared","blearier","bleariest","blearing","blears","bleary","bleat","bleated","bleating","bleats","bleb","blebs","bled","bleed","bleeder",
"bleeders","bleeding","bleedings","bleeds","bleep","bleeped","bleeping","bleeps","blees","blemish","blemished","blemishes","blemishing","blench","blenched"
,"blenches","blenching","blend","blended","blender","blenders","blending","blends","bless","blessed","blessedly","blessedness","blesses","blessing","blessings"
,"blest","bleta","blether","blethered","blethering","blethers","bleu","blew","blight","blighted","blighting","blights","blimp","blimps","blind"
,"blinded","blinder","blinders","blindest","blindfold","blindfolded","blindfolding","blindfolds","blinding","blindingly","blindly","blindness","blinds","blink","blinked"
,"blinker","blinkered","blinkering","blinkers","blinking","blinks","blintz","blintzes","blip","blipped","blipping","blips","bliss","blissful","blissfully"
,"blister","blistered","blistering","blisteringly","blisters","blithe","blithely","blither","blithered","blithering","blithers","blithest","blitz","blitzed","blitzes", "blitzing","blitzkrieg","blitzkriegs","blizzard","blizzards","bloat","bloated","bloating","bloats","blob","blobs","bloc","block","blockade","blockaded"
,"blockades","blockading","blockage","blockages","blockbuster","blockbusters","blocked","blockhead","blockheads","blockhouse","blockhouses","blocking","blocks","blocky","blocs"
,"bloke","blokes","blond","blonde","blonder","blondes","blondest","blood","bloodbath","blooded","bloodhound","bloodhounds","bloodied","bloodier","bloodies"
,"bloodiest","blooding","bloodless","bloodlessly","bloodletting","bloodline","bloodlines","bloodlust","bloodroot","bloodroots","bloods","bloodshed","bloodshot","bloodspots","bloodstain"
,"bloodstained","bloodstains","bloodstone","bloodstones","bloodstream","bloodsucker","bloodsuckers","bloodsucking","bloodthirstiness","bloodthirsty","bloody","bloodying","bloom","bloomed","bloomer"
,"bloomers","blooming","bloomington","blooms","blooper","bloopers","blossom","blossomed","blossoming","blossoms","blot","blotch","blotched","blotches","blotchiness"
,"blotching","blotchy","blots","blotted","blotter","blotters","blotting","blouse","bloused","blouses","blousing","blouson","blousons","blow","blower"
,"blowers","blowfish","blowflies","blowfly","blowgun","blowguns","blowhard","blowhards","blowhole","blowholes","blowing","blowlamp","blowlamps","blown","blowout"
,"blowouts","blowpipe","blowpipes","blows","blowtorch","blowtorches","blowzier","blowziest","blowzy","blubber","blubbered","blubbering","blubbers","blucher","bluchers"
,"bludgeon","bludgeoned","bludgeoning","bludgeons","blue","bluebell","bluebells","blueberries","blueberry","bluebird","bluebirds","bluebook","bluebooks","bluebottle","bluebottles"
,"bluefish","bluefishes","bluegrass","bluejacket","bluejackets","bluenose","bluenoses","blueprint","blueprinted","blueprinting","blueprints","bluer","blues","bluest","bluestocking"
,"bluestockings","bluets","bluff","bluffed","bluffer","bluffers","bluffest","bluffing","bluffs","bluing","bluish","blumba","blunder","blunderbuss","blunderbusses"
,"blundered","blunderer","blunderers","blundering","blunders","blunt","blunted","blunter","bluntest","blunting","bluntly","bluntness","blunts","blur","blurb"
,"blurbs","blurred","blurring","blurry","blurs","blurt","blurted","blurting","blurts","blush","blushed","blusher","blushers","blushes","blushing"
,"bluster","blustered","blustering","blusters","blustery","boa","boar","board","boarded","boarder","boarders","boarding","boardroom","boardrooms","boards", "boardwalk","boardwalks","boars","boas","boast","boasted","boaster","boasters","boastful","boastfully","boasting","boasts","boat","boatable","boated"
,"boatel","boatels","boater","boaters","boathouse","boathouses","boating","boatload","boatloads","boatman","boatmen","boats","boatsman","boatsmen","boatswain"
,"boatswains","boatyard","boatyards","bobbed","bobbie","bobbies","bobbin","bobbing","bobbins","bobble","bobbled","bobbles","bobbling","bobby","bobbysoxer"
,"bobbysoxers","bobcat","bobcats","bobolink","bobolinks","bobs","bobsled","bobsleds","bobtail","bobtailed","bobtails","bode","boded","bodes","bodice"
,"bodices","bodied","bodies","bodiless","bodily","boding","body","bodybuilder","bodybuilders","bodybuilding","bodyguard","bodyguards","bodying","bodywork","boeing"
,"boeings","boer","boers","bogey","bogeyed","bogeyman","bogeymen","bogeys","bogged","boggier","boggiest","bogginess","bogging","boggle","boggled"
,"boggles","boggling","boggy","bogie","bogies","bogota","bogs","bogus","bogy","bohemia","bohemian","bohemians","boil","boilary","boiled"
,"boiler","boilermaker","boilermakers","boilerplate","boilers","boiling","boils","boise","boisterous","boisterously","boisterousness","bola","bolas","bold","bolded"
,"bolder","boldest","boldly","boldness","bole","bolero","boleros","boles","boletus","boletuses","bolivia","bolivian","bolivians","boll","bollard"
,"bollards","bollix","bollixed","bollixes","bollixing","bolls","bolo","bologna","bolognese","bolos","bolshevik","bolsheviks","bolshevism","bolshevist","bolshevistic"
,"bolster","bolstered","bolstering","bolsters","bolt","bolted","bolting","bolts","bolus","boluses","bomb","bombard","bombarded","bombardier","bombardiers"
,"bombarding","bombardment","bombardments","bombards","bombast","bombastic","bombastically","bombay","bombazine","bombazines","bombe","bombed","bomber","bombers","bombes"
,"bombing","bombings","bombproof","bombs","bombshell","bombshells","bombsight","bombsights","bona","bonanza","bonanzas","bonaparte","bonbon","bonbons","bond"
,"bondage","bonded","bonding","bonds","bondservant","bondservants","bondsman","bondsmen","bone","boned","bonefish","bonehead","boneheads","boneless","boner"
,"boners","bones","bonfire","bonfires","bong","bonged","bonging","bongo","bongoes","bongos","bongs","bonhomie","bonier","boniest","boning"
,"bonis","bonito","bonitos","bonn","bonnet","bonneted","bonnets","bonnie","bonnier","bonniest","bonny","bono","bonsai","bonum","bonus"
,"bonuses","bony","bonze","bonzes","boob","boobies","booboo","booboos","boobs","booby","boodle","boodles","booed","boogie","boogied"
,"boogies","boogying","boohoo","boohooed","boohooing","boohoos","booing","book","bookbinder","bookbinderies","bookbinders","bookbindery","bookbinding","bookcase","bookcases"
,"booked","bookend","bookends","booker","bookers","bookie","bookies","booking","bookings","bookish","bookkeeper","bookkeepers","bookkeeping","booklet","booklets"
,"bookmaker","bookmakers","bookmaking","bookmark","bookmarks","bookmobile","bookmobiles","bookplate","bookplates","books","bookseller","booksellers","bookshare","bookshelf","bookshelves","bookshop","bookshops","bookstall","bookstalls","bookstand","bookstands","bookstore","bookstores","bookworm","bookworms"
,"boolean","boom","boomed","boomer","boomerang","boomeranged","boomeranging","boomerangs","boomers","booming","booms","boomtown","boomtowns","boon","boondocks"
,"boondoggle","boondoggled","boondoggles","boondoggling","boons","boor","boorish","boorishly","boorishness","boors","boos","boost","boosted","booster","boosters"
,"boosting","boosts","boot","bootblack","bootblacks","booted","bootee","bootees","booth","booths","bootie","booties","booting","bootleg","bootlegged"
,"bootlegger","bootleggers","bootlegging","bootlegs","bootless","bootlick","bootlicker","bootlickers","bootlicking","boots","bootstrap","bootstrapped","bootstrapping","bootstraps","booty"
,"booze","boozed","boozer","boozers","boozes","boozier","booziest","boozing","boozy","bopped","bopping","bops","borate","borax","bord"
,"bordeaux","bordello","bordellos","borden","border","bordereau","bordereaux","bordered","bordering","borderland","borderlands","borderline","borderlines","borders","bore"
,"boreal","borealis","bored","boredom","borer","borers","bores","boric","boring","boringly","borings","boris","born","borne","borneo"
,"borodin","boron","borough","boroughs","borrasca","borrascas","borrow","borrowed","borrower","borrowers","borrowing","borrowings","borrows","borsch","borscht"
,"borsht","borzoi","borzois","boscalis","bosh","bosky","bosnia","bosnian","bosom","bosomed","bosoms","boson","bosons","bosporus","boss"
,"bossed","bosses","bossier","bossiest","bossily","bossiness","bossing","bossy","boston","bostonian","bosun","bosuns","botanic","botanical","botanist"
,"botanists","botany","botch","botched","botches","botching","bote","both","bother","bothered","bothering","bothers","bothersome","botswana","botticelli"
,"bottle","bottled","bottleneck","bottlenecks","bottles","bottling","bottom","bottomed","bottoming","bottomless","bottomry","bottoms","botulism","boucle","boudoir"
,"boudoirs","bouffant","bougainvillea","bough","boughs","bought","bouillabaisse","bouillon","boulder","boulders","boulevard","boulevards","bounce","bounced","bouncer"
,"bouncers","bounces","bouncier","bounciest","bouncily","bouncing","bouncy","bound","boundaries","boundary","bounded","bounder","bounders","bounding","boundless"
,"boundlessness","bounds","bounteous","bounteously","bounteousness","bounties","bountiful","bountifully","bountifulness","bounty","bouquet","bouquets","bourbon","bourbons","bourgeois"
,"bourgeoisie","bourse","bourses","bout","boutique","boutiques","boutonniere","boutonnieres","bouts","bovine","bovines","bovril","bowdlerization","bowdlerize","bowdlerized"
,"bowdlerizes","bowdlerizing","bowed","bowel","bowels","bower","bowers","bowes","bowfin","bowie","bowies","bowing","bowl","bowled","bowler"
,"bowlers","bowline","bowlines","bowling","bowls","bowman","bowmen","bowmore","bows","bowsprit","bowsprits","bowstring","bowstrings","boxcar","boxcars"
,"boxed","boxer","boxers","boxes","boxing","boxwood","boxwoods","boxy","boyar","boyars","boycott","boycotted","boycotting","boycotts","boyd"
,"boyfriend","boyfriends","boyhood","boyish","boyishly","boys","boysenberries","boysenberry","bozo","bozos","brace","braced","bracelet","bracelets","bracer"
,"bracers","braces","brach","brachia","brachial","brachiopod","brachiopods","brachium","bracing","bracken","brackens","bracket","bracketed","bracketing","brackets"
,"brackish","bract","bracts","brad","brads","brae","braes","brag","braggadocio","braggadocios","braggart","braggarts","bragged","bragger","braggers"
,"bragging","brags","brahma","brahman","brahmans","brahmin","brahms","braid","braided","braiding","braids","braille","brain","brainchild","brainchildren","brained","brainier","brainiest","braining","brainless","brainlessly","brains","brainstorm","brainstorming","brainstorms"
,"brainteaser","brainteasers","brainwash","brainwashed","brainwashes","brainwashing","brainwave","brainwaves","brainwork","brainy","braise","braised","braises","braising","brake"
,"braked","brakes","braking","bramble","brambles","brambly","bran","branch","branched","branches","branching","brand","branded","brandeis","brandied"
,"brandies","branding","brandish","brandished","brandishes","brandishing","brandon","brands","brandy","bras","brash","brasher","brashest","brashly","brashness"
,"brasilia","brass","brasserie","brasses","brassier","brassiere","brassieres","brassiest","brassily","brassy","brat","bratislava","brats","brattier","brattiest"
,"bratty","brava","bravado","bravadoes","bravados","brave","braved","bravely","braver","bravery","braves","bravest","braving","bravo","bravoes"
,"bravos","bravura","brawl","brawled","brawler","brawlers","brawling","brawls","brawn","brawnier","brawniest","brawniness","brawny","bray","brayed"
,"braying","brays","braze","brazed","brazen","brazened","brazening","brazenly","brazenness","brazens","brazes","brazier","braziers","brazil","brazilian"
,"brazilians","brazils","brazing","brazzaville","breach","breached","breaches","breaching","bread","breadboard","breaded","breadfruit","breadfruits","breading","breads"
,"breadth","breadths","breadwinner","breadwinners","break","breakable","breakables","breakage","breakages","breakaway","breakaways","breakdown","breakdowns","breaker","breakers"
,"breakfast","breakfasted","breakfasting","breakfasts","breaking","breakneck","breakout","breakpoint","breakpoints","breaks","breakthrough","breakthroughs","breakwater","breakwaters","bream"
,"breams","breast","breastbone","breastbones","breasted","breasting","breastplate","breastplates","breasts","breaststroke","breaststrokes","breastwork","breastworks","breath","breathable"
,"breathalyzer","breathalyzers","breathe","breathed","breather","breathers","breathes","breathier","breathiest","breathing","breathings","breathless","breathlessly","breathlessness","breaths"
,"breathtaking","breathy","bred","breech","breeches","breed","breeder","breeders","breeding","breeds","breeze","breezed","breezeless","breezes","breezeway"
,"breezier","breeziest","breezily","breeziness","breezing","breezy","brehonia","bremen","brenda","brendan","brennan","brethren","breton","bretons","bretton"
,"breughel","breve","breves","brevet","brevets","brevia","breviaries","breviary","breviate","breviates","brevis","brevity","brew","brewed","brewer"
,"breweries","brewers","brewery","brewing","brews","brian","briar","briars","bribe","bribed","briber","briberies","bribers","bribery","bribes"
,"bribing","brick","brickbat","brickbats","bricked","bricking","bricklayer","bricklayers","bricklaying","bricks","brickwork","brickyard","brickyards","bridal","bridals"
,"bride","bridegroom","bridegrooms","brides","bridesmaid","bridesmaids","bridewell","bridge","bridgeable","bridged","bridgehead","bridgeheads","bridgeport","bridges","bridget"
,"bridgetown","bridgework","bridging","bridle","bridled","bridles","bridling","brie","brief","briefcase","briefcases","briefed","briefer","briefest","briefing","briefly","briefness","briefs","brier","briers","brig","brigade","brigades","brigadier","brigadiers","brigand","brigands","brigantine","brigantines","briggs"
,"bright","brighten","brightened","brightening","brightens","brighter","brightest","brightly","brightness","brigs","brilliance","brilliancy","brilliant","brilliantine","brilliantly"
,"brilliants","brim","brimful","brimmed","brimming","brims","brimstone","brimstones","brine","brined","brines","bring","bringer","bringing","brings"
,"brining","brink","brinkmanship","briny","brio","brioche","brioches","briquette","briquettes","brisbane","brisk","brisker","briskest","brisket","briskets"
,"briskly","briskness","brisling","brislings","bristle","bristled","bristles","bristlier","bristliest","bristling","bristly","bristol","brit","britain","britannia"
,"britannic","britannica","britches","briticism","british","britisher","briton","britons","brits","brittany","brittle","broach","broached","broaches","broaching"
,"broad","broadcast","broadcaster","broadcasters","broadcasting","broadcasts","broadcloth","broaden","broadened","broadening","broadens","broader","broadest","broadloom","broadly"
,"broadness","broads","broadsheet","broadsheets","broadside","broadsides","broadsword","broadswords","broadtail","broadtails","broadway","brocade","brocaded","brocades","brocage"
,"brocages","broccoli","brochette","brochettes","brochure","brochures","brogan","brogans","brogue","brogues","broil","broiled","broiler","broilers","broiling"
,"broils","broke","broken","brokenheartedly","brokenly","broker","brokerage","brokerages","brokered","brokers","bromeliad","bromeliads","bromide","bromides","bromidic"
,"bromine","bronchi","bronchia","bronchial","bronchiolar","bronchiole","bronchioles","bronchitis","bronchoscope","bronchoscopes","bronchus","bronco","broncos","brontosaur","brontosaurs"
,"brontosaurus","brontosauruses","bronx","bronze","bronzed","bronzes","bronzing","brooch","brooches","brood","brooded","brooder","brooders","broodier","broodiest"
,"brooding","broods","broody","brook","brooke","brooked","brooking","brooklyn","brooks","broom","brooms","broomstick","broomsticks","bros","broth"
,"brothel","brothels","brother","brotherhood","brotherhoods","brotherly","brothers","brougham","broughams","brought","brouhaha","brow","browbeat","browbeaten","browbeating"
,"browbeats","brown","browned","brownie","brownies","browning","brownish","brownout","brownouts","browns","brownstone","brows","browse","browsed","browses"
,"browsing","bruce","brucellosis","bruges","bruin","bruise","bruised","bruiser","bruisers","bruises","bruising","bruit","bruited","bruiting","bruits"
,"brume","brumes","brunch","brunches","brunei","brunet","brunets","brunette","brunettes","brunswick","brunt","brush","brushed","brushes","brushing"
,"brushings","brushwood","brushwork","brushy","brusque","brusquely","brusquer","brusquest","brussels","brut","brutal","brutalities","brutality","brutalize","brutalized"
,"brutalizes","brutalizing","brutally","brute","brutes","brutish","brutishly","brutum","bryan","bryophyte","bryophytes","btu","bubble","bubbled","bubbles"
,"bubblier","bubbliest","bubbling","bubbly","bubo","buboes","bubonic","buccaneer","buccaneers","bucharest","buck","buckaroo","buckaroos","buckboard","buckboards"
,"bucked","bucket","bucketed","bucketful","bucketing","buckets","buckeye","buckeyes","bucking","buckingham","buckle","buckled","buckler","bucklers","buckles"
,"buckling","buckram","bucks","buckshot","buckskin","buckskins","buckteeth","bucktooth","buckwheat","bucolic","bucolically","budapest","budded","buddha","buddhism"
,"buddhist","buddhists","buddies","budding","buddy","budge","budged","budgerigar","budgerigars","budges","budget","budgetary","budgeted","budgeting","budgets"
,"budgie","budgies","budging","buds","buenos","buff","buffalo","buffaloed","buffaloes","buffaloing","buffalos","buffed","buffer","buffered","buffering"
,"buffers","buffet","buffeted","buffeting","buffets","buffing","buffo","buffoon","buffoonery","buffoons","buffos","buffs","bugaboo","bugaboos","bugbear"
,"bugbears","bugged","bugger","buggers","buggery","buggies","bugging","buggy","bugle","bugler","buglers","bugles","bugs","build","builder"
,"builders","building","buildings","builds","built","bulb","bulbar","bulbous","bulbs","bulbul","bulbuls","bulgaria","bulgarian","bulgarians","bulge"
,"bulged","bulges","bulgier","bulgiest","bulginess","bulging","bulgur","bulgy","bulimia","bulimic","bulk","bulked","bulkhead","bulkheads","bulkier"
,"bulkiest","bulkily","bulkiness","bulking","bulks","bulky","bull","bulldog","bulldogged","bulldogging","bulldogs","bulldoze","bulldozed","bulldozer","bulldozers","bulldozes","bulldozing","bulled","bullet","bulletin","bulletins","bullets","bullfight","bullfighter","bullfighters","bullfights","bullfinch","bullfinches","bullfrog","bullfrogs"
,"bullhead","bullheads","bullied","bullies","bulling","bullion","bullish","bullishness","bullock","bullocks","bullrings","bulls","bullshit","bullshits","bullshitted"
,"bullshitting","bullwhacker","bullwhackers","bullwhip","bullwhipped","bullwhipping","bullwhips","bully","bullying","bulrush","bulrushes","bulwark","bulwarked","bulwarking","bulwarks"
,"bumbailiff","bumbailiffs","bumbershoot","bumble","bumblebee","bumblebees","bumbled","bumbles","bumbling","bummed","bumming","bump","bumped","bumper","bumpers"
,"bumpier","bumpiest","bumpily","bumpiness","bumping","bumpkin","bumpkins","bumps","bumptious","bumpy","bums","bunch","bunched","bunches","bunching"
,"bundle","bundled","bundles","bundling","bung","bungalow","bungalows","bunged","bunging","bungle","bungled","bungler","bunglers","bungles","bungling"
,"bungs","bunion","bunions","bunk","bunked","bunker","bunkered","bunkers","bunking","bunks","bunkum","bunnies","bunny","buns","bunsen"
,"bunt","bunted","bunter","bunters","bunting","buntings","buntline","buntlines","bunts","buoy","buoyancy","buoyant","buoyed","buoying","buoys"
,"burberry","burberrys","burble","burbled","burbles","burbling","burden","burdened","burdening","burdens","burdensome","burdensomely","burdock","burdocks","bureau"
,"bureaucracies","bureaucracy","bureaucrat","bureaucratic","bureaucratically","bureaucratization","bureaucratize","bureaucratized","bureaucratizes","bureaucratizing","bureaucrats","burette","burettes","burford","burg"
,"burgage","burgages","burgeon","burgeoned","burgeoning","burgeons","burger","burgers","burgess","burgesses","burgh","burgher","burghers","burghs","burglar"
,"burglaries","burglariously","burglarize","burglarized","burglarizes","burglarizing","burglars","burglary","burgle","burgled","burgles","burgling","burgomaster","burgomasters","burgos"
,"burgs","burgundian","burgundies","burgundy","burial","burials","buried","buries","burin","burins","burke","burkina","burking","burkism","burl"
,"burlap","burlaps","burlaw","burlaws","burlesque","burlesqued","burlesques","burlesquing","burley","burleys","burlier","burliest","burliness","burlington","burls"
,"burly","burma","burmese","burn","burned","burner","burners","burning","burnish","burnished","burnishes","burnishing","burnoose","burnous","burnouses"
,"burnout","burns","burnt","burp","burped","burping","burps","burr","burred","burring","burrito","burritos","burro","burros","burrow"
,"burrowed","burrowing","burrows","burrs","burs","bursar","bursaria","bursars","bursitis","burst","bursting","bursts","burt","burundi","burundian"
,"bury","burying","busboy","busboys","buses","bush","bushed","bushel","bushels","bushes","bushier","bushiest","bushiness","bushing","bushings"
,"bushwhack","bushwhacked","bushwhacker","bushwhackers","bushwhacking","bushwhacks","bushy","busied","busier","busies","busiest","busily","business","businesses","businesslike"
,"businessman","businessmen","businesswoman","businesswomen","busker","buskers","buskin","buskins","busload","busman","busmen","buss","bussed","busses","bussing"
,"bust","bustard","bustards","busted","buster","busters","busting","bustle","bustled","bustles","bustling","busts","busy","busybodies","busybody"
,"busying","busyness","butadiene","butane","butanes","butch","butcher","butchered","butcheries","butchering","butchers","butchery","butches","butler","butlers"
,"buts","butt","buttal","buttals","butte","butted","butter","buttercup","buttercups","buttered","butterfat","butterfingers","butterflies","butterfly","butteries"
,"buttering","buttermilk","butternut","butternuts","butters","butterscotch","buttery","buttes","butting","buttock","buttocks","button","buttoned","buttonhole","buttonholed"
,"buttonholes","buttonholing","buttoning","buttons","buttonwood","buttress","buttressed","buttresses","buttressing","butts","butyl","butyrate","butyric","buxom","buyer"
,"buyers","buying","buyout","buyouts","buys","buzz","buzzard","buzzards","buzzed","buzzer","buzzers","buzzes","buzzing","buzzword","byelorussia"
,"byelorussian","byes","bygone","bygones","bylaw","bylaws","byline","bylines","bypass","bypassed","bypasses","bypassing","byre","byres","byroad"
,"byroads","byron","bystander","bystanders","byte","bytes","byway","byways","byword","bywords","byzantine","byzantium","cabal","cabala","cabalistic"
,"caballaria","cabals","cabana","cabanas","cabaret","cabarets","cabbage","cabbages","cabbala","cabbalas","cabbie","cabbies","cabby","cabdriver","cabdrivers"
,"caber","cabernet","cabernets","cabers","cabin","cabinet","cabinetmaker","cabinetmakers","cabinetry","cabinets","cabinetwork","cabins","cable","cabled","cablegram"
,"cablegrams","cables","cableway","cableways","cabling","cabman","cabmen","cabochon","cabochons","caboodle","caboose","cabooses","cabot","cabotage","cabriolet"
,"cabriolets","cabs","cacao","cacaos","cache","cacheable","cached",











];

    let currentWord = "";
    let score = 0;
    let timer;
    let timeLeft = 10; // Time in seconds for each round

    // New API-related variables
    const speech = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();

    const speakButton = document.getElementById('speak-button');
    const userInput = document.getElementById('user-input');
    const submitButton = document.getElementById('submit-button');
    const nextButton = document.getElementById('next-button');
    const feedback = document.getElementById('feedback');
    const scoreDisplay = document.getElementById('score-display');
    const timerDisplay = document.getElementById('timer-display');

    // Function to get a random word from the list
    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    // Function to speak the word using the API
    function speakWord() {
        utterance.text = currentWord;
        speech.speak(utterance);
    }

    // Function to start a new round
    function startNewRound() {
        clearInterval(timer);
        timeLeft = 10;
        timerDisplay.textContent = `Time: ${timeLeft}s`;

        currentWord = getRandomWord();
        speakWord(); // Speak the word automatically at the start

        userInput.value = "";
        feedback.textContent = "";
        userInput.disabled = false;

        submitButton.style.display = 'block';
        nextButton.style.display = 'none';

        userInput.focus();

        startTimer();
    }

    // Function to update the score
    function updateScore(points) {
        score += points;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    // Function to start the timer
    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                endRound(false);
            }
        }, 1000);
    }

    // Function to end the round (correct or incorrect)
    function endRound(isCorrect) {
        clearInterval(timer);
        userInput.disabled = true;

        if (isCorrect) {
            feedback.textContent = "Correct! Well done!";
            feedback.classList.remove('incorrect');
            feedback.classList.add('correct');
            updateScore(10);

            submitButton.style.display = 'none';
            nextButton.style.display = 'block';
        } else {
            feedback.textContent = `Time's up! The correct spelling was "${currentWord}".`;
            feedback.classList.remove('correct');
            feedback.classList.add('incorrect');
            submitButton.style.display = 'none';
            nextButton.style.display = 'block';
        }
    }

    // Event listener for the submit button
    submitButton.addEventListener('click', () => {
        const userSpelling = userInput.value.trim().toLowerCase();
        if (userSpelling === currentWord) {
            endRound(true);
        } else {
            feedback.textContent = `Incorrect. The correct spelling was "${currentWord}".`;
            feedback.classList.remove('correct');
            feedback.classList.add('incorrect');
        }
    });

    // Event listener for the next word button
    nextButton.addEventListener('click', () => {
        startNewRound();
    });

    // Event listener for the "Play Word" button
    speakButton.addEventListener('click', () => {
        speakWord();
    });

    // Allow user to press 'Enter' key to submit
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            submitButton.click();
        }
    });

    // Initial call to start the game
    startNewRound();
});

