let counter = 60;
let score = 0;
let acc = 0;
let spawned = 0;
let timer = document.getElementById("timer");
let inp = document.getElementById("box");
let display = document.getElementById("board");
let accu = document.getElementById("accu");
let rig = document.getElementById("rig");
let nums = [random(), random(), random(), random(), random()];

function random() {
  let x = Math.floor(Math.random() * (1000 - 1)) + 1;
  return x;
}

let allWords =
  "lively answer vest meal apple rainy miss sponge child like cake expansion cute alive inhale ducks supply magic lethal dock change amuck wander pout crowded chairs memory bean bite-sized heat worm married addicted play fifth weak rain ticket choose moo hope reward noisy nip piquant slim shape patch happen ill wake father defective connot ear my meat imprint support polish zoo swim dynamic canvass industrious leg boast dress wall discussion swim intelligent own different call bike small shear satisfy dead pan secure price satisfy painful wind breath encourage interest quince eatable measly health jar harbor bizarre knowledgeable title blood scald harm fabulous satisfy special fog imminent lumber arrogant morning puffy high falut indangerous rend sour stitch signal difficult enthusiastic deafening languid decrease contemn tasty cherry complete top noise less coal cease available infringe chunky wilderness farm innovate hollow zephyr imaginary squealing mail box lively swear approval blur hurl heady accurate wrench receive competition pollute contend laborer taste opinion unique tremble vagabond pot ear touch infect massive petite unequal holistic regret selectives tar children chat spell bless mew giddy bears flagrant alarm judicious bubblead just chunky quinces ink keep children land fireman zippy one out put bit delightful sneeze lackadaisical string bustling zebra same trousers daffy understand rest crayon tendency curvy talented spiffy reuses limy lead vagabond bouncy fat cycle yawn vast doctor brake offer dapper subscribe futuristic reward devilish notify beam sort jump like hollow easy put smiling gain say watch faithful discovery abandoned beast sisters telling shaggy smell goat unable toe political scent come bubble solicit fathers cold arrogants way cons true rain storm mint shocking salve equal route avoid encouraging holistic tent absent obnoxious shallow desk toy divergent nappy translate vigorous person pardon stupid constrain puzzled blossom earn building goldfish jail phone mere foamy tire illumine beginner stiff murmur mine scant calculator sugar jumbled touch tent hug mass sneak lend price cough learn verdant zonked ducks foolish unbiased goose meek bet farm story uneven volatile attract moult juicy responsible manage party metal deserted actually open rabid govern cloud nice enter impress tire appear bit ablaze sentence language vengeful knit female car counsel language eggs invincible do convict raspy black-and-white talented ball cows entertaining inquisitive control please cagey call difficult faucet determined comb dime own squirrel hateful hug record beggar death wandering cluttered lick gentle industrious market ready high falut in busy glitter call second merge selective damaging possessive uneven rob horse relation kittens faithful tight roasted kiss standing magical linen nut skate balance ablaze song shape improve spend support giant smeasly holiday typical orde produce parcel reflective in lay warm chin charge evasive detailed versed lend decisive stupendous boorish cluttered perish possessive repulsive resell sneeze consist field early habitual lead kaput polish brainy trouble righteous bear chance beam elegant whisper transport describe sanction correct heavenly disease precious inhabit payment anger applaud self stop material promise profit change unknown lizards record super crazy friends annoying explain dedicate cute transfer spin window flame thunder letters history remain false magenta windy bray dear vary note immolate seed good home improve room waste messy distance yellow berserk scarf north inspect bomb bright irritating government pull inflect bite-sized cake guitar joke earn paper tidy tense squal id space correspon compel forgetful level best billowy comparison month frighten spit aberrant greasy war purring day apathetic creep wary scald abusive forlese angry loose four winter huge gate stew demonic swanky jobless teach camera govern steam nostalgic accept talk faint premium year beggar cut street form wring tee yarn organization magnify evasive animate superficial cope forgetful macho sag part green stitch obscene young present calm glamorous fight cheap fuzzy strive dash color digestion crazy hellish shear club psychotic care healthy weary nonstop run prevent ugly bubble protect scarce wander rambunctious lumber excellent call aboard delicious tramp stay add impulse pet attention spend filthy comfortable exchange corrod elastic roar current butter somber stocking smooth notify glance apples face prison cost rude apples rabbit popcorn lean rebel cabbage dinner jazzy share nine report repair hateful color hearing conclude illustrious swanky town actually destroy marble cruel spread serious pull envious popcorn aback short appear butter way tired sow cooing daffy faucet pot dazzling psychedelic jeans shrink destroy light finicky relax roof lean inhale tub boorish slay horn modify utter chin cherry foretell lovely ocean balloon apple crowded moan mighty brain haircut hustle route lift reaction squeamish hate destroy pail sidewalk scar fly confiscate roar beam scarf heartbreaking obese orange kettle picayune seek breathe boats ad-hoc hop bray impress skirt sock didactic zoo mask stare education sing recite change transform stress snotty vanish purpose climb classy cry air robin receipt last shaky hallowed blade pump card rain storm chief previous detach dare point trick bone hot sand grieving six girls charge stay donkey install resolute interesting preach page bed swide quack recondite maid nippy knotty chicken obstruct happen shrill infringe hope bomb angle untidy earsplitting soften chanting normal aberrant impair pencil obscene chivalrous front jam create produce swing frog country fizz join join glance boring sacrifice include callous found order tooth ooze cats shave spoon imported needy closed airport stretch bid religion rabid glue grant latch nonchalant course shade bow feast purring living scald engine wacky crackle regret mislead house rice scarecrow fumbling notebook dispensable responsible flash rampant icky cellar cute men mew walk indicate be confiscate sally consider knot fairies impair birth fretful camera favour horse potato accessible swing worry impartial sound gash tawdry tart imminent workable accept kind mammoth quick fear tangy teeny-tiny rightful savvy dye attractive constitute sink sincere value spray abhorrent rude greet root silent temporary kick uncle last unaccountable disappear plausible amusement improve well-made derive icy square freeze brainy check spoon handsome cloud medical paltry chair bait wary necessary didactic kiss division miscreant redundant tramp steel discuss egg implore fall equable air cute poison mint decision feel prison belong give difficult sloppy groovy freeze kid down town entertaining dash dad jump basketball high-pitched differ roll hydrant desire upbeat utopian neighborly burner rorcover shine agreeable arch";
let wordarray = allWords.split(" ");
function dis() {
  display.value =
    wordarray[nums[0]] +
    "  " +
    wordarray[nums[1]] +
    "  " +
    wordarray[nums[2]] +
    "  " +
    wordarray[nums[3]] +
    "  " +
    wordarray[nums[4]];
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    inp.setAttribute("Placeholder", "");
    inp.value = "";
    dis();
    maintimer();
  } else if (event.key === " ") {
    if (
      display.value !== "Challenge your own limits" &&
      display.value !== "Time's Up"
    ) {
      score = score + inp.value.length;
      inp.value = "";
      spawned = spawned + 1;
      space();
    }
  }
});

function maintimer() {
  if (timer.innerHTML === "60") {
    for (let i = 0; i <= 60; i++) {
      setTimeout(function () {
        timer.innerHTML = counter;
        counter = counter - 1;
        if (counter == -1) {
          display.value = "Time's Up";
          inp.setAttribute("readonly", "true");
          document.getElementById("finalscore").innerHTML =
            "Your Typing speed is " + score / 5 + " Wpm";
          document
            .getElementById("total")
            .setAttribute("style", "display:block");
            document.getElementById("containt").setAttribute('style','display:none')
        }
      }, i * 1000);
    }
  }
}

function reset() {
  window.location = "";
  document.getElementById("total").setAttribute("style", "display:none");
}

function space() {
  nums[0] = nums[1];
  nums[1] = nums[2];
  nums[2] = nums[3];
  nums[3] = nums[4];
  nums[4] = random();
  dis();
}

inp.addEventListener("keydown", function () {
  inputonce = inp.value.trim();
  frontword = wordarray[nums[0]];
  if (inputonce == frontword) {
    acc = acc + 1;
  }
  accu.innerHTML =
    "Your Accuracy rate is " + ((acc * 100) / spawned).toFixed(2) + "%";
  rig.innerHTML = "You have typed " + acc + " words correctly";
});
