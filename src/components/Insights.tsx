import React, { useState, useEffect } from 'react';
import '../styles.css';

interface Article {
  title: string;
  author: string;
  category: string;
  content: string | React.ReactNode;
}

const articles: Article[] = [
  {
    title: "Great Things for Two Right Feet",
    author: "Hannah Cote",
    category: "Two Right Feet",
    content:  <>
                <p>We have been busy over the last few months. Many of you have seen a lot of things happening at 
                   Two Right Feet Arts. I just wanted to update everyone about what we are doing to help promote 
                   reading, literacy and language development.</p>
                <h3>Website and Blog</h3>
                <p>The website was created by our web developer, David Cote. We feel he did a great job putting all 
                   of the information together and keeping our branding the way we like it. We hope to be a fun, go-to 
                   source for all of the things we care about – children’s literacy, language development, and reading. 
                   We will be writing and sharing our stories and information on the Two Right Feet Arts Blog.</p>
                <h3>E-Newsletter</h3>
                <p>We are working on an email newsletter to share information and resources. It will get emailed out 
                   on the 15th of every month, and we are looking to send out our first issue on July 15th, 2015. The 
                   first edition will have a fun look and feel, and will provide summer reading tips and resources 
                   that will help parents, teachers, and librarians. You can subscribe to the Two Right Feet 
                   Newsletter here.</p>
                <h3>Two Right Feet Facebook Page</h3>
                <p>Many people asked if we had a Facebook page, we do now! We will be sharing great information and 
                   resources that we find to help children learn and read. This is all in keeping with our goal to 
                   educate, engage, and entertain children. If you are interested, please like our page. Also, if we 
                   have performed for you, please feel free to give us a review on Facebook. It would be greatly 
                   appreciated. Two Right Feet Arts Facebook Page</p>
                <h3>Youtube Channel</h3>
                <p>Our Two Right Feet Arts YouTube Channel is up and running and we shared a recent video from when 
                   we were at the Stafford Springs Library. The video is an excerpt is from our squirrel program and 
                   is called “5 Little Squirrels.” It’s an interactive American Sign Language song for children. I am 
                   telling the squirrel story and Garry is playing music on the bass.</p>
                <p>The video is below:</p>
                {/* Add youtube video here of "5 Little Squirrels Children's Song" */}
                <h3>LinkedIn</h3>
                <p>I am on LinkedIn and would love to connect with all of our friends who we have worked on programs 
                   with in the past. We also have a Two Right Feet Arts LinkedIn Company page to help share out some 
                   of our great resources and programs that we find. If you are looking for a late summer or fall 
                   program for your library or school, drop us a line or you can connect with me here: 
                   https://www.linkedin.com/in/hannahdemmerle.</p>
                <p>We are looking forward to being a rich source of reading and literacy for parents, teachers, and 
                   librarians, but most of all we are looking forward to helping kids read and learn!</p>
                <p>Hannah Cote</p>
                <p>Program Director</p>
              </>
  },
  {
    title: "Kids Lose Reading Skills in Summertime",
    author: "Hannah Cote",
    category: "Summer Reading",
    content:  <>
                <p>According to a thought-provoking study about summer reading called, ‘Read for Success’ by RIF 
                   (Reading is Fundamental):</p>
                <p>“During the summer, low-income students lose more than two months of reading achievement”</p>
                <p>The Reading for Success’ research study sought to address the socioeconomic disparity and its 
                   relationship with reading levels in economically disadvantaged children compared to their peers 
                   who have access to more resources. Children in poorer communities were behind in their reading 
                   skills.</p>
                <p>Once a child reaches third grade, playing catch up with their peers becomes more difficult 
                   resulting in the child becoming more frustrated and therefore more likely to drop out of school. 
                   RIF study’s goal was to understand the issue and seek a way to bridge the reading level gap, 
                   allowing all children to succeed.</p>
                <p>80% of low income students lose reading skills over the course of the summer. This does not have 
                   to be the case. Summer can be a make or break time for children in economically disadvantaged 
                   household; they can either fall further behind or use the few months to catch up and even excel in 
                   reading proficiency.</p>
                <p>RIF’s new model seeks to decrease the summer reading loss in low income communities. Research shows 
                   three key factors vital to reading achievement:</p>
                <li>Access to a lot of good, high quality books</li>
                <li>Book ownership</li>
                <li>Child’s choice in book selection</li>
                <p>This program cut summer reading loss in half (from 80% to only 40%) in these children. The 
                   statistically significant findings showed stunning gains in the study participants who applied 
                   themselves over the summer. The Read for Success Mode contains six components that are vital in 
                   combating reading loss, one of which is to provide schools, libraries, and centers with high 
                   quality STEAM (Science, Technology, Engineering, Arts, and Math) enrichment activities. See page 
                   eight for more info on six components.</p>
                <p>Check out RIF’s ‘Read for Success’ research study on the importance of summer learning.</p>
              </>,
  },
  {
    title: "Scholastic 2015 Report on Kids and Summer Reading",
    author: "Hannah Cote",
    category: "Summer Reading",
    content:  <>
                <p>As teachers, librarians, and caregivers we are in a position to foster a love of reading in our 
                   children.  How can we get a child to the point where he picks up a book to read for fun?  
                   Scholastic and YouGov conducted a study, publishing their results in the Kids and Family Reading 
                   Report 5th Edition, to examine that very question.</p>
                <p>To create a “frequent reader” in children 6-17 the study points to several predicting factors (a 
                   frequent reader is defined as a child who reads books for pleasure five to seven days a week). 
                   The article elaborates: “Three dynamics among the most powerful predictors are:</p>
                <li>being more likely to rate themselves as “really enjoying reading”</li>
                <li>a strong belief that reading for fun is important and</li>
                <li>having parents who are frequent readers. (Page 23)”</li>
                <p>Other noteworthy factors included: early experience reading aloud with a parent, having a variety 
                   of books around the home accessible to the child, and limiting device/ screen time.</p>
                <p>It’s never too early to start reading to your child, as soon as the baby is born, read to him or 
                   her; they process more than you may realize! </p>
                <p>Eight in ten children said they love(ed) being read to as a child. Storytime is an enjoyable 
                   bonding and learning experience that can stimulate and reinforce the invaluable habit of enjoying 
                   a good book.</p>
                <p>Once the child is older, have him choose the book he wants to read.  Children, like adults, like 
                   a sense of control. Bring them to the library and have them browse the shelves for books that they 
                   find appealing.</p>
                <h3>So what do children look for in a book?  The study has some interesting insights:</h3>
                <div>
                  <li>“Ninety-one percent of children ages 6–17 say “my favorite books are the ones that I have picked 
                    out myself.” (Page 56)</li>
                  <li>The majority of kids ages 6–17 (70%) say they want books that “make me laugh.”</li>
                  <li>Kids also want books that “let me use my imagination” (54%)</li>
                  <li>“tell a made-up story” (48%)</li>
                  <li>“have characters I wish I could be like because they’re smart, strong or brave” (43%)</li>
                  <li>“teach me something new” (43%)</li>
                  <li>and “have a mystery or a problem to solve” (41%).”</li>
                </div>
                <p>As mentioned earlier, it is important to limit screen time.  There are many distractions 
                   available to children including smartphones, tablets, and other devices which can compete with 
                   books.  If you set limits early on, the child will learn to view books as a source of 
                   entertainment.  Create a household reading habit and your children will likely follow suit.</p>
                <p>Fill your house with books and read.</p>
                <h3>Learn More:</h3>
                <p>http://www.scholastic.com/readingreport/Scholastic-KidsAndFamilyReadingReport-5thEdition.pdf?v=100</p>
              </>,
  },
  {
    title: "Rhythm, Memory, and Learning",
    author: "Hannah Cote",
    category: "Music and Learning",
    content:  <>
                <p>We are often asked while setting up for a program, “Why the guy with the bass?”</p>
                <p>Boost Memory and Learning with Music, an article by Cheri Lucas, discusses the importance of music 
                   in the learning process.</p>
                <p>Time and time again, music has proven to enhance a person’s ability to learn and retain 
                   information whether it be learning the alphabet or learning about the solar system.</p>
                <h3>Music Can:</h3>
                <li>Motivate a child</li>
                <li>Stimulate their busy minds (multi-sensory learning approach)</li>
                <li>Set a positive mood (to energize or calm)</li>
                <li>Boost memory and attention span inside and outside of the classroom.</li>
                <p>For example, rhythm-rich and bass-oriented music can help a child tune into a lesson on verbs.</p>
                <p>In the article, Chris Brewer,  author and founder of LifeSounds Educational Services shares that 
                   one of the ways to tie music to memory is to remember:</p>
                <div>“Your child memorizes more effectively through rhythm and rhyme. Chants and raps improve memory 
                   of details and help the retrieval of information later.”</div>
                <p>So, by all means grab a book and ‘get jiggy with it’!</p>
              </>,
  },
  {
    title: "Bring Books to Life with Interactive Reading",
    author: "Hannah Cote",
    category: "Literacy and Reading",
    content:  <>
                <p>Research suggests you can increase your child’s IQ by six points or more by applying interactive 
                  reading techniques during storytime.</p>
                <p>Wow! Not only can this reading approach help your child become a bit brainier, but by making the 
                  readings interactive you are bringing books to life.</p>
                <h3>So, What Exactly is Interactive Reading?</h3>
                <p>The PBS Parents’ article Applying Interactive Reading in Everyday Life by Jason Boog discusses 
                  interactive reading, describing it as helping, “your child participate in the reading experience, 
                  instead of passively listening to a story.” So the question is, how can I do this if I do not have 
                  a degree in education?</p>
                <h3>Parents and Educators – One Common Theme</h3>
                <p>Applying Interactive Reading in Everyday Life is designed for parents and educators. The article 
                  breaks down Mr. Boog’s book, Born Reading: Bringing up Bookworms in a Digital Age. In his book he 
                  interviewed, librarians, neuroscientists, teachers, child development experts, and authors. 
                  Throughout these interviews, Mr. Boog realized one common theme: reading must be interactive in 
                  order for a child to fully benefit.</p>
                <h3>There is a Small Catch</h3>
                <p>Traditional reading methods, although better than nothing, are not as powerful as interactive 
                  reading which can be more time consuming.  Acknowledging the fact that parents are busy creatures, 
                  Boog comments:</p>
                <div>“…these interactive reading techniques work ANYWHERE, and you don’t even need a physical book. 
                  To help busy parents and caregivers, I’ve outlined a few ways you can use these life-changing Born 
                  Reading Playbook techniques anywhere and anytime.  I discovered that I could use these interactive 
                  reading tricks during grocery store trips, TV time, car rides, long lines, the park and many other 
                  places. These little tricks can work magic, easing long waiting experiences and soothing temper 
                  tantrums.”</div>
                <h3>5 Simple Steps to Incorporate into an Everyday Routine</h3>
                <p>Boog’s Playbook outlines five relatively simple tips to incorporate into your everyday routine. 
                  These strategies include:</p>
                <ol>
                  <li>“Guess what happens next”</li>
                  <li>“Follow the things your child loves”</li>
                  <li>“Compare real life situations to books”</li>
                  <li>“Discuss personal opinions about a book”</li>
                  <li>“Dramatize the story”</li>
                </ol>
                <h3>Realize You Don’t Need to be ‘Mother Goose’</h3>
                <p>These are all things you can do without getting a degree in ‘Mother Goose’ or obtaining a masters 
                  in education. Remember to bring books to life, apply them to everyday moments, welcome the 
                  storybook characters to the dinner table, and talk about their favorite parts.</p>
                <p>Interactive reading is a worthwhile activity to do with your child… you will form deeper bonds 
                  and help feed their growing minds.</p>
                <p>Have you tried any of these techniques? Do you use interactive reading with your child? Let us 
                  know your thoughts in the comments below –</p>
              </>,
  },
  {
    title: "Reading and Rambling: How to Read Outside the Box",
    author: "Hannah Cote",
    category: "Literacy and Reading",
    content:  <>
                <h3>So now that my child is reading ‘inside the box’ how can I get him to explore?</h3>
                <p>Reading Rainbow contributor Jenni Buchanan discusses how to help your student or child read a 
                  variety of books, authors, and literary styles. Her recent article, Read Outside the Box, helps 
                  parents and teachers to encourage their children to read outside their comfort zone and expand 
                  their literary horizons. </p>
                <p>Ms. Buchanan comments:</p>
                <div>“Research shows that it’s beneficial for us to get outside of our comfort zones periodically 
                  style, and this includes books and reading material. The good news is that by reading outside the 
                  box you can open doors to swaths of new literature for yourself and the young reader in your 
                  life, and it costs nothing but a library card and a couple of chapters of open-minded reading.”</div>
                <p>If your child is in a “comic book” rut or only wants to read stories about heroic penguins, this 
                  article provides several useful tips on how to slowly open his mind to exploring different 
                  authors, subjects, and genres. However, because reading outside one’s comfort zone can be… well… 
                  uncomfortable, the article suggests a gradual shift towards other book styles.  For instance, to 
                  use the penguin example again, if your child only wants to read about “Billy the Brave Bird” 
                  bring him to the library and introduce him to a non-fiction book about animals in the arctic.  
                  Or perhaps, on your next library mission, find books similar to the author your child enjoys.  
                  This effort can slowly whet his appetite to different styles and stories, making his literary 
                  and literal world bigger and growing his busy mind.</p>
                <p>What is important is that you make reading fun. Your child can go from a reluctant reader to an 
                  avid reader with patience, time, and warm encouragement from you.</p>
              </>,
  },
  {
    title: "The Strong Correlation Between a Toddler's Vocabulary and Kindergarted Success",
    author: "Hannah Cote",
    category: "Literacy and Reading",
    content:  <>
                <h3>Hit the ground crawling.</h3>
                <p>Psych Central’s article Strong Vocabulary at Two Linked to Kindergarten Success by Traci Pedersen 
                  discusses the strong correlation of oral language and academic success.</p>
                <p>A recent study conducted by researchers from Pennsylvania State University, University of 
                  California, Irvine, and Columbia University noticed an exciting trend between the vocabulary of 
                  two year olds and their academic performance in kindergarten.  The greater the oral vocabulary of 
                  the toddler, the greater his success in kindergarten.  The study took notice several factors 
                  affecting the child’s vocabulary including: socioeconomic differences, the health of the mother, 
                  birth weight, and the home environment.</p>
                <div>George Farkas, a co-author and professor of Education at the University of California, Irvine 
                  comments: “These oral vocabulary gaps emerge as early as two years. Early interventions that 
                  effectively increase the size of children’s oral vocabulary may help at-risk two year-olds 
                  subsequently enter kindergarten classrooms better prepared academically and behaviorally. 
                  Interventions may need to be targeted to two year-olds being raised in disadvantaged home 
                  environments.”</div>
                <p>Not only were children with stronger vocabularies better prepared for learning to read, but 
                  they also excelled in their social and communication skills, behavioral self-regulation, and 
                  mathematics.  These children also experience fewer outbursts and bouts of anxiety within the 
                  classroom setting and interactions with their peers.  </p>
                <p>The importance of building a child’s oral vocabulary cannot be stressed enough.  Early 
                  intervention in disadvantaged homes can help shrink the performance gap between children who 
                  have greater vocabularies due, in part, to having more resources within the home and those who 
                  are less fortunate is vital.  </p>
                <p>
                Children’s growing minds can absorb and retain more than we can possibly imagine.  By taking the 
                time to read to them, talk to them, and teach them we give our children a chance to succeed in 
                kindergarten and in all of their academic endeavors that will impact their lives.  </p>
                <p>It’s never too early to start.  </p>
              </>,
  },
  {
    title: "Afterschool Programming, Enrichment, and Student Success",
    author: "Hannah Cote",
    category: "Afterschool Program",
    content:  <>
                <p>UCLA’s evidence-based research article discusses the great value of afterschool programs and its 
                  role in helping children love learning and reading.   </p>
                <p>Throughout the past few years, more and more children are being enrolled in afterschool programs. 
                  This is positive news!  According to research, students who are enrolled in afterschool programs 
                  are: better readers, less likely involved in criminal activity, have improved test scores, better 
                  students and learners, and higher attendance rates.</p>
                <p>Making Afterschool Programs Better by Denise Huang and Ronald Dietel discuss what makes a high 
                  quality afterschool program and how to improve the quality of the students’ experience in these 
                  valuable programs. The article outlines five key ingredients that make up a high quality program 
                  which includes: clear, rigorous goals, invested teachers and experienced leadership, motivating 
                  and committed staff, a program that compliments the day school’s learning objectives with 
                  homework assistance and exposure to high quality STEAM enrichment activities, and finally 
                  evaluation of programs goals for continued program improvement.</p>
                <p>The article closes with an inspiring quote from an experienced and passionate program director:</p>
                <div>“I think it’s very important that everybody understand the power that can come from an 
                  afterschool program in affecting change, not only cultural change on campus but also individually 
                  in particular lives. The sense of accomplishment that comes from being in one of our programs 
                  where they have more freedom to explore and have more hands-on experiences is profound.”</div>
                <p>Afterschool programs are not just a place for kids to go after school’s out and before parent 
                  pick-up. They are a safe haven for children to thrive where they can find homework support, learn 
                  about themselves as students and creators, become more involved in their academic community, 
                  explore the arts through valuable STEAM enrichment programs, and learn to love books, the arts, 
                  and learning.</p>
                <p>To Learn more about the value of afterschool programming and how to improve the quality of these 
                  excellent educational resources, please visit UCLA’s study What Makes Afterschool Programs Better.</p>
              </>,
  },
  {
    title: "Components of Learning to Read: Phonemes, Phonics, and Vocab... Oh My!",
    author: "Hannah Cote",
    category: "Literacy and Reading",
    content:  <>
                <p>English Language Learners and the Five Essential Components of Reading Instruction by Beth Antunez 
                  discusses how to get children to become literate, frequent readers.  The article defines and 
                  outlines key components of learning to read and how to use this knowledge to assist new readers 
                  and english language learners become literate.  For the sake of simplicity and brevity, this piece 
                  will focus solely on understanding the five components of reading instruction (a future blog will 
                  be dedicated to the art of teaching english language learners to read).  </p>
                <p>The first of the five components of reading instruction is phonemic awareness which means 
                  understanding the basic, smallest parts of speech sounds in a word.  The example the article uses 
                  is “shop” which has three basic speech sounds, or phonemes: “sh/o/p”.  The reason that phonemic 
                  awareness is so crucial in learning to read is because once these phonemes are understood, a 
                  student can then string the sounds together to form words.  What can truly help children to master 
                  the concept of phonemes are songs that are rich in rhyme and repetition.  Think back to your 
                  school days as an elementary student.  Jump rope rhymes like “Miss Mary Mack” helped you to grasp 
                  speech sounds by way of a musical rhyme.  </p>
                <p>After phonemic awareness comes phonics, another key component in becoming literacy.  Phonics is 
                  defined as, “the understanding that there is a predictable relationship between phonemes (the 
                  sounds of spoken language) and graphemes (the letters and spellings that represent those sounds 
                  in written language).”  The relationship between speech sounds and letters representing the 
                  sounds allows children to recognize letters and sight words while decoding words that may be 
                  unfamiliar.  This is the exciting start to a child gaining literacy skills and learning to read.  
                  Antunez continues, “The goal is to help children understand that there is a systematic and 
                  predictable relationship between written letters and spoken sounds (CIERA, 2001).”  </p>
                <p>Once a child gains ground in the reading components of phonemic awareness and phonics, he or she 
                  can then begin to develop their growing vocabulary.  Vocabulary development involves learning 
                  words, their pronunciations, and their meanings.  Learning and memorizing the reading and writing 
                  of sight words enables the student to grow their collection of vocabulary words.   It is important 
                  that not only can a child sound out the word and read it, but that they also understand the 
                  meaning of the words; vocabulary development is closely linked to reading comprehension.  If the 
                  child does not understand the word they are sounding out in a storybook, there is no way to 
                  determine whether or not the word makes sense in the context of the story. Two Right Feet’s blogs 
                  and facebook posts have dedicated several pieces on fun, interactive, and multi-sensory methods of 
                  learning sight words, their definitions, and building a more extensive vocabulary.  </p>
                <p>The final two segments of reading instruction are reading fluency which includes oral skills and 
                  reading comprehension strategies.  Reading fluency can help a child read with momentum, fluidity, 
                  and ease.   Learning to read fluently will turn a frustrated and struggling reader into an avid 
                  and frequent reader because they are able to quickly and simultaneously recognize words and 
                  associate them with their meanings.  Antunez writes: “Reading fluency is a critical factor 
                  necessary for reading comprehension. If children read out loud with speed, accuracy, and proper 
                  expression, they are more likely to comprehend and remember the material than if they read with 
                  difficulty and in an inefficient way.”  Reading comprehension, the fifth and final component, 
                  is a cornerstone and ultimate objective in becoming a literate student.  It is interrelated to 
                  the other facets of reading comprehension, promoting the proficiency of each component whether 
                  it be: phonemic awareness, phonics, vocabulary development, and reading fluency.  What is 
                  interesting to note is that, “NRP found that reading comprehension is clearly related to 
                  vocabulary knowledge and development. The NRP also found that comprehension is an active process 
                  that requires an intentional and thoughtful interaction between the reader and the text that can 
                  be explicitly taught through text comprehension instruction.”  </p>
                <div>One of the greatest gifts you can give a child is the gift of reading.  Former first lady, 
                  Jacqueline Kennedy once wrote: “There are many little ways to enlarge your child’s world. Love 
                  of books is the best of all.”  Do not just teach children to read books, but show them how 
                  beautiful, enlightening, and empowering reading can truly be.  </div>
                <p>To learn more about how to take this knowledge of teaching literacy and applying it to new 
                  readers and english language learners visit Beth Antunez’s article English Language Learners and 
                  the Five Essential Components of Reading Instruction.  </p>
              </>,
  },
  {
    title: "Keep Calm and Rock On: Music and Learning",
    author: "Hannah Cote",
    category: "Music and Learning",
    content:  <>
                <p>Young Children Learning Mathematics Through Beat, Rhythm and Melody by Kamile Geist, Eugene A. 
                  Geist, and Kathleen Kuznik discuss how music is not only pleasurable but also useful in 
                  stimulating growing, young minds.    </p>
                <p>Music and rhythm can be powerful tools in teaching children.  While many early childhood toys 
                  are meant to stimulate the sense of sight, one of the first ways and infant learns to organize 
                  his or her thoughts and understand patterns is through their sense of hearing and touch.  The 
                  steady, rhythmic beat of a lullaby or nursery rhyme can soothe an infant while also allowing the 
                  infant to hear and process the complex patterns of the music.</p>
                <p>Incorporating music into a teacher, librarian, or parent’s daily routine will naturally and 
                  easily contribute to future learning in literacy and mathematics, activating patterning.  The 
                  article emphasizes the importance of using music to support a child’s learning stating, “Keeping 
                  mathematics learning natural and comfortable should be the goal of all teachers, whether they are 
                  teaching infants or college students”.  Numerous studies have shown that using music in the 
                  classroom regularly while teaching reading or mathematics, at any age, greatly improves the 
                  person’s ability to understand and retain complex concepts. For example, when was the last time 
                  you have heard a commercial without background music?  Music can help us remember things whether 
                  it be an advertising jingle for shaving cream or the ABC song.  </p>
                <div>The article continues: “Recent music neuroscience research indicates that steady beat does 
                  affect attention behaviors in humans. We typically process steady beat in the premotor cortex of 
                  the brain, an area also related to attention (Bengtsson et al. 2008). Zentner and Eerola (2010) 
                  found that 120 infants, ages 5–24 months, were more engaged with rhythm-only stimuli (for 
                  example, a steady drum beat) than with speech-only stimuli. The results of this study indicate 
                  that children have the potential to be more engaged when listening to steady beats than when 
                  listening to verbal-only instructions.”  </div>
                <p>For helpful tips to incorporate in a teacher’s lesson plan (whether it be during circle time 
                  reading or a math lesson on addition and subtraction), see purple box in article entitled, “Tips 
                  for Using Music to Engage Children in Mathematics”.  </p>
                <p>Keep calm and rock on.</p>
              </>,
  },
  {
    title: "Poetry: A Gate to a Garden",
    author: "Hannah Cote",
    category: "Literacy and Poetry",
    content:  <>
                <p>An inspiring article The Word Fairy: The Magic of Reading and Writing for Young Children by 
                  Veronika Shulman from Get Lit – Words Ignite describes their work in helping children and teens 
                  to connect with classic poetry and write their own original piece.  They believe that if a student 
                  could “claim their poem” they could “claim their life”. Why the need?   </p>
                <p>The correlation between literacy rates and incarceration is truly sobering.  Low income 
                  communities tend to have poor graduation rates due to lack of resources and disadvantaged, 
                  struggling homes.  Oftentimes this results in low literacy rates.  For example, California, 
                  rated 49th in the USA, is in serious crisis; their literacy rates are on par with some third 
                  world countries.  Sobering to note, this problem not only national, but global.  </p>
                <p>Reading can be empowering and the opposite is true too.  If a child does not learn to read, 
                  learning becomes frustrating, and young ones become bored and disillusioned, turning to the 
                  streets for escape and stimulation.  There is a way to break the cycle, however: show children 
                  the beauty and value of language.  Put the pain on paper; give it a voice and take away its power.   
                  As Shulman states, “Reading is truly a game-changer, as it can engage students in their own 
                  educations and change the trajectories of their lives completely.”</p>
                <div>The article highlights the power of poetry to foster self-expression and to promote a love 
                  of an appreciation for language.  Shulman comments, “In reading and responding to great works 
                  of literature, people start to love, like, and value words instead of dreading them. Even more 
                  important, they realize that they have voices and that their voices matter. It’s never too early 
                  to learn that lesson.”  </div>
                <p>Start early.  When you read aloud with your child, ask them what they liked about the story or 
                  poem.  Which character they related to… How the story made them feel… That can be the beginning 
                  of positive self-expression and learning to connect deeply with books and words.  Once they 
                  begin to enjoy words and the nuances of language, they can begin to enjoy their minds.  </p>
              </>,
  },
  {
    title: "Building Lesson Plans Around Educational, Biographical Books",
    author: "Hannah Cote",
    category: "Literacy and Poetry, Literacy and Reading",
    content:  <>
                <p>Me: In Poetry, Song, and Art by Michelle Currin, writer and teacher, discusses what she learned 
                  at a particularly meaningful and inspiring professional development course, a “Picture Book Read 
                  In.”  At this educators event, Currin and other teachers, were able to explore new books that were 
                  especially geared towards our right-brained, creative side.  This Playful Learning blog focuses 
                  on biographies and autobiographies for children about poets and artists. The three books 
                  highlighted in this piece are Enormous Smallness by Matthew Burgess (about poet  e. e. 
                  cummings), Trombone Shorty by Troy Andrews (an autobiography about a musician), and Draw What 
                  You See by Kathleen Benson (about fine artist Benny Andrews).</p>
                <div>The value of sharing educational, factual books with children is enormous. Currin writes: 
                  “Picture books easily engage children in non-fiction text, and these books can easily integrate 
                  reading, writing, and the arts. The more connections children can make across domains, the 
                  more effective learning opportunities become.”  </div>
                <p>What is especially fantastic about using a non-fiction book like Trombone Shorty is that the 
                  book can be easily adapted to suit different ages, populations, and grades.  An entire lesson 
                  plan can be built around learning about e. e. cummings.  For example, have the class read the 
                  book Enormous Smallness followed by an ELA teaching lesson on wordplay and poetry.  Depending on 
                  the grade level, the children can close the activity by writing their own autobiographical poem.  
                  Currin comments: “Extending the reading of a book with supplemental experiences enhances 
                  children’s’ understanding as well.”</p>
                <p>For older grade levels, the teacher can present several biographies and then compare and 
                  contrast the lives of the artists, how each found inspiration, and developed their talents (ie: 
                  Venn Diagram-collage hybrid activity). In teaching reading comprehension, one of the primary 
                  goals in processing non-fiction is to find and break down factual information.  Using picture 
                  books like the three Currin features can help children process non-fiction material in an 
                  interest-arousing and engaging way.  </p>
                <p>Sharing stories about artists and poets can have a profound impact on the life of a child.  
                  There is no greater achievement for a teacher than to inspire a student to reach their 
                  potential. “Each of us has a spark of life inside us, and our highest endeavor ought to be to 
                  set off that spark in one another.” – Kenny Ausubel.  </p>
                <p>Note: One of the books Two Right Feet presents, Rap a Tap Tap: Here’s Bojangles- Think of That! 
                  by Diane Dillon and Leo Dillon is about the innovative and gifted tap dancer Bill “Bojangles” 
                  Robinson.  We build a lesson plan around learning about this talented, American-born dancer and 
                  how we can express ourselves through dance just like “Bojangles”.</p>
              </>,
  },
  {
    title: "Performance Gaps in the Classroom: Gender and Economic Factors",
    author: "Hannah Cote",
    category: "Literacy and Reading",
    content:  <>
                <p>According to news article Boys Trail Girls in Literacy and Numeracy When Starting School, a 
                  recent government study reveals a considerable gender gap in literacy and numeracy.  Despite 
                  the fact that this gap has narrowed, female students continue to outperform their male classmates 
                  in writing and learning numbers.  Sally Weale, education correspondent for The Guardian, 
                  writes: “The gender gap among the youngest schoolchildren has narrowed marginally, but girls 
                  continue to lead the way in all early learning goals, with 74.3% achieving the expected level of 
                  development compared with 58.6% of boys.” Experts warn that these figures are significant and a 
                  call to action is needed to help turn the tide.  </p>
                <p>Another key factor in literacy performance gaps continues to be socioeconomic disparities.  One 
                  out of every five children start school already behind the curve, missing the skills needed to 
                  succeed in the classroom.  Gareth Jenkins, director of UK poverty at the charity Save the 
                  Children, comments:  “The evidence shows it’s the poorest children who are more likely to start 
                  primary school already behind, and who are then much more likely to struggle in school, and in 
                  life.”  </p>
                <div>“Literacy is a bridge from misery to hope. It is a tool for daily life in modern society. It 
                  is a bulwark against poverty, and a building block of development, an essential complement to 
                  investments in roads, dams, clinics and factories. Literacy is a platform for democratization, 
                  and a vehicle for the promotion of cultural and national identity… it is an agent of family 
                  health and nutrition. For everyone, everywhere, literacy is, along with education in general, a 
                  basic human right…. Literacy is, finally, the road to human progress and the means through 
                  which every man, woman and child can realize his or her full potential.” – Kofi Annan. </div>
                <p>By improving the quality of early childhood education, society can help all children have a 
                  fair chance to succeed in their academic endeavors and thrive in the classroom.  Dedicated 
                  parents and educators can (and do) play a significant, positive role in bridging these 
                  performance gaps.</p>
              </>,
  },
  {
    title: "TED Talks with Dave Eggers on 1:1 Education",
    author: "Hannah Cote",
    category: "Literacy and Reading",
    content:  <>
                <p>Dave Eggers, author, publisher, and educational activist discusses how he took his dream of 
                  helping disadvantaged children with reading and writing and made it into a reality.</p>
                <p>Studies have shown that a student who receives 30-45 hours a year with 1:1 attention can get one 
                  grade level higher.  Due to large classrooms and limited resources, this is not something schools 
                  can realistically provide on their own.  After learning about the literacy rates of children in 
                  disadvantaged homes and children who speak english as a second language, Eggers and his group of 
                  publishers dedicated their afternoons to helping local children with their reading and homework.   
                  This inspiring and humorous TED talk takes you through his journey of opening up a stigma-free 
                  tutoring center/ publishing company that supported their noble efforts to help struggling young 
                  readers through a “Buccaneers Supply Shop”. 826 Valencia in San Francisco, California sold all 
                  things Pirate.  This concept of 1:1 attention and tutoring expanded, with Superhero and Time 
                  Travel stores and free tutoring centers opening up in Brooklyn, Los Angeles, and even Dublin, 
                  Ireland.</p>
                <p>The adult publishers and children were able to work side-by-side and not only get help tutoring 
                  but share ideas, collaborate, and create in a fun learning environment.  The children wrote their 
                  own stories and learned to love reading and writing because of this 1:1 attention and “cross 
                  pollination” between young, creative minds and passionate adult writers and educators.</p>
                <p>This heartwarming and funny TED talk ends with a call to action pleading with creative educators 
                  and volunteers to help children learn to love reading and writing.</p>
                <h3>Learn More About Once Upon a School:</h3>
                <p>http://www.826national.org/once-upon-a-school/</p>
              </>,
  },
  {
    title: "A No-Tears Way to Learn Sight Words",
    author: "Hannah Cote",
    category: "Literacy and Reading",
    content:  <>
                <p>After a child has mastered letters and letter sounds, he or she will shortly begin to learn 
                  various sight words.  What exactly are “sight words”?  According to one educational website 
                  sight word is defined as, “a word that is immediately recognized as a whole and does not require 
                  word analysis for identification. Good readers instantly recognize sight words without having to 
                  decode them. Sight words are usually high-frequency words, which occur most frequently in our 
                  language.”  Learning sight words is truly an important part of learning to read.  It can be 
                  described as the on-ramp to becoming a proficient reader.  </p>
                <p>What are some fun ways to help your child or student learn their sight words?</p>
                <p>Where The Wild Things Are – Listen and Find Sight Words Activities – Free Printables by a staff 
                  writer from No Time for Flashcards shares an engaging and educational activity to do with your 
                  student or child that reinforces the learning of sight words.  This articles has downloadable 
                  printables to use for the well-loved children’s book Where the Wild Things Are by Maurice Sendak.  
                  As the children either listens to the book or reads the book himself he can check off or highlight 
                  the sight words as he hears or reads them.  If the sheet is completed, the child can get a reward.  
                  Now is a fine time to stock up on discounted candy for this reading practice activity!    </p>
                <div>The articles shares a quick warning note regarding this fun activity, however: “Make sure they 
                  are familiar with these words, this is a practice activity not an initial learning one. This will 
                  be incredibly frustrating for a child who can’t find the words at all. If there is one or two words 
                  that are not at all familiar go ahead and color those in before the activity. This isn’t a test, 
                  it should be fun!”</div>
                <p>What is crucially important is to make sure that your child enjoys the process of learning to read.  
                  By making a child’s encounter with books positive, a parent or educator can create a healthy 
                  reading habit in their little ones as they grow and learn.   </p>
                <p>Each printables worksheet can be adapted to practice new sight words for different books and 
                  different age-groups, providing the “just right challenge”.  Children can go from mastering simple 
                  words like “the” to recognizing larger words like “buoyant” or “pterodactyl” as they learn to love 
                  and appreciate the gift of language.  </p>
              </>,
  },
  {
    title: "Music and Its Power Over Emotions and Actions",
    author: "Hannah Cote",
    category: "Music and Learning",
    content:  <>
                <p>Washington Post staff writer Meeri Kim discusses the link between music and its power over 
                  emotions and actions in her piece The Secret Math Behind Feel-Good Music. What is it about a 
                  certain song that can make us feel joyful, wistful, depressed, or playful?</p>
                <p>An assistant professor in cognitive and neuroscience at the at the University of Groningen, 
                  Jacob Jolij, conducted a study focusing on the math behind “feel-good” music. His research found 
                  that tempo and key are the primary variables that make a song seem happy or sad.</p>
                <div>The article states: “Jolij’s final equation of Feel Good Index (FGI) includes the sum of all 
                  positive references in the lyrics, the song’s tempo in beats per minute and its key. The higher 
                  a song’s FGI, the more feel-good it is predicted to be. Happy lyrics, a fast tempo of 150 beats 
                  per minute (the average pop song has a tempo of 116 beats per minute), and a major third musical 
                  key all help create music we perceive as brimming with positive emotion.”</div>
                <p>Music is powerful and can “indirectly influence our perceptions and actions”. Research has 
                  repeatedly shown that music can help children in the classroom: to motivate, stimulate, help 
                  children focus, and aid in memory and learning retention.</p>
                <p>So, by all means, rock on!</p>
                <p>Fun fact: According to the study, the song that scored highest on the “Feel Good Index” was 
                  “Don’t Stop Me Now” by Queen. Who knew?</p>
              </>,
  },
  {
    title: "Relationship Between Language, Climate, and Terrain",
    author: "Hannah Cote",
    category: "Language Development",
    content:  <>
                <p>Science Magazine article Human Language May be Shaped by Climate and Terrain by Emily Underwood 
                  discusses the fascinating phenomenon of acoustic adaptation.  Researchers are learning that human 
                  language development may be influenced by our environments.  Underwood compares Hawaiian and 
                  Georgian as an example: “Hawaiian language flow melodically from vowel to vowel, whereas Georgian 
                  is peppered with consonants…”  </p>
                <p>After studying over 600 languages, significant relationships emerge between the sounds of 
                  language and the land and climate the language is spoken.  Scientists have observed a pattern…</p>
                <div>“Languages in hotter, more forested regions such as the tropics tended to be “sonorous,” 
                  employing lower frequency sounds and using fewer distinct consonants, whereas languages in colder, 
                  drier, more mountainous places were consonant-heavy”.  </div>
                <p>Driving factors of this difference appears to be: humidity, forested environment, tree cover (or 
                  lack thereof), and terrain (rocky vs. smoother topography).  </p>
                <p>Although this study is still new and solely correlational, these truly fascinating findings of 
                  climate and land affecting language is regarded in the scientific community as a “totally 
                  reasonable idea”.  </p>
                <p>Thank you!</p>
                <p>Mahalo! (Hawaiian- thank you)</p>
                <p>Madloba gadagikhadot! (Georgian pronunciation of thank you)</p>
                <p>… Ah, well, they both start with the “M” sound.  🙂</p>
              </>,
  },
  {
    title: "Corny, Maybe... Beneficial, Yes - Why the Nursery Rhymes",
    author: "Hannah Cote",
    category: "Literacy and Poetry",
    content:  <>
                <p>It’s hard to think of preschool and kindergarten without thinking of crafts, crayons, and 
                  (of course) nursery rhymes. Even now, songs like “I’m a Little Teapot” or “Ring Around the Rosie” 
                  can get stuck in your adult brain, leaving you reaching for a bottle of Advil.  Does Hear-Tech 
                  make mindplugs? And some of these songs are old… like 
                  “Middle-Ages-Lords-Eating-Oversized-Drumsticks-While-Watching-Court-Jesters” old.  Why did our 
                  teachers drill these catchy, and at times irritating, songs into our young minds?  </p>
                <p>The Surprising Meaning and Benefits of Nursery Rhymes by PBS Parents writer Michael Sizer 
                  provides the fascinating answer, highlighting four pros of learning nursery rhymes.  Firsthand, 
                  these tunes help brain development: building visual and oral skills and increasing memory 
                  capabilities.  Another benefit is preservation of culture and history.  Back to the Lord binging 
                  on oversized drumsticks, many nursery rhymes have rich histories and have been passed on from 
                  generation to generation.  Teach them to love history and cherish culture.  Nursery rhymes are 
                  also an excellent group activity.  Outgoing and shy children alike can learn the tunes together 
                  and have a shared musical experience bonding with their peers.  Lastly, and equally important, 
                  many of these songs are just plain fun, especially when they include tongue twisters and old 
                  language like, “Peas porridge hot/peas porridge cold”.  Let your child unleash their inner silly… 
                  it’s good for them.</p>
                <div>Michael Sizer concludes with a reason nursery rhymes are still relevant to the modern child: 
                  “One should not let any supposed deeper meanings or origins to nursery rhymes obscure their true 
                  value: the joy of a child’s discovery of an old, shared language.”  These songs, old and new, 
                  have numerous benefits: they are good for the brain, preserve a culture, teach history, provide 
                  opportunities to bond, and be a joyful, shareable experience.  </div>
                <p>So, by all means, bust a rhyme.</p>
              </>,
  },
  {
    title: "Benefits of Dance in Children - Why Endure Dance Recitals",
    author: "Hannah Cote",
    category: "Dance and Creative Movement",
    content:  <>
                <p>Youtube is filled with cute dancing baby videos.  It’s adorable to adults.  Amazingly, though, it 
                  is natural to infants.  The desire to express themselves through movement is hard-wired into 
                  their young brains. Studies have shown that dance, “… is pre-verbal, beginning before words can 
                  be formed. It is innate in children before they possess command over language and is evoked when 
                  thoughts or emotions are too powerful for words to contain. “  Besides making hilarious and 
                  heartwarming Youtube clips, when children bust a move it is good for them.  Before you begin 
                  wondering whether or not to endure another one of your five year old niece’s (seemingly endless) 
                  dance recitals, please note the following.</p>
                <p>Standards of Dance in Early Childhood: The Philosophy Underlying Early Childhood Standards by a 
                  staff writer of the National Dance Education Organization discusses the numerous benefits of 
                  dance in children.  Creative movement and dance can have a major impact on a child’s: physical 
                  development, emotional maturity, social awareness, and cognitive development.</p>
                <p>Here is what NDEO breakdown of dances’ effect on young bodies and minds:</p>
                <div>
                  <h3>Physical Development:</h3>
                  <p>Dance involves a greater range of motion, coordination, strength and endurance than most other 
                    physical activities. This is accomplished through movement patterns that teach coordination and 
                    kinesthetic memory. Dancing utilizes the entire body and is an excellent form of exercise for 
                    total body fitness. Young children are naturally active, but dance offers an avenue to expand 
                    movement possibilities and skills.</p>
                  <h3>Emotional Maturity:</h3>
                  <p>Dance promotes psychological health and maturity. Children enjoy the opportunity to express 
                    their emotions and become aware of themselves and others through creative movement. A pre-school 
                    child enters a dance class or classroom with a history of emotional experiences. Movement within 
                    a class offers a structured outlet for physical release while gaining awareness and appreciation 
                    of oneself and others.</p>
                  <h3>Social Awareness:</h3>
                  <p>Dance fosters social encounter, interaction, and cooperation. Children learn to communicate 
                    ideas to others through the real and immediate mode of body movement. Children quickly learn to 
                    work within a group dynamic. As the ongoing and sometimes challenging process of cooperation 
                    evolves, children learn to understand themselves in relation to others.</p>
                  <h3>Cognitive Development</h3>
                  <p>Young children will create movement spontaneously when presented with movement ideas or 
                    problems that can be solved with a movement response. Movement provides the cognitive loop 
                    between the idea, problem, or intent and the outcome or solution. This teaches an infant, child 
                    and, ultimately, adult to function in and understand the world. The relationship of movement 
                    to intellectual development and education is an embryonic field of study that has only recently 
                    begun to be explored.</p>
                </div>
                <p>Because children learn best from experience, learning by doing (and dance nothing if not “doing”) 
                  reinforces kinesthetic learning.  Dance integrates kinesthetic learning with understanding and 
                  comprehension.  Creative movement gives children an opportunity to learn through their primary 
                  systems: physical and sensory experiences. Dance involves problem solving, helping them to make 
                  sound choices and respond to stimuli accordingly with their bodies.</p>
                <p>What is more, dance promotes literacy.  The article continues: “To the young child, verbal 
                  language and movement are entwined. Preverbal movement expression does not cease when a child 
                  develops language. The road to literacy involves the translation of movement expression and 
                  communication into words. Learning language and learning dance are not separate threads, but 
                  are woven together and incorporated into a fabric of communication and understanding.”</p>
                <p>Dance is not just about grooving to a fun beat.  To children it is so much more.  When you 
                  provide young ones with opportunities to move creatively, you are benefits their bodies and their 
                  minds.</p>
              </>,
  },
];

const Insights: React.FC = () => {
  // State for managing the modal visibility and selected article
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Function to open the modal with the selected article
  const openModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  // Effect to mangage body class when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to ensure the class is removed on component unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  return (
    <div className="insights">
      <h2>Insights</h2>
      <ul className="article-list">
        {articles.map((article, index) => (
          <li key={index}>
            <button onClick={() => openModal(article)} className="article-link">
              {article.title}
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && selectedArticle && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedArticle.title}</h2>
            <p>
              <em>
                by {selectedArticle.author} | {selectedArticle.category}
              </em>
            </p>
            <div>{selectedArticle.content}</div>
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Insights;
