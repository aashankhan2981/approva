#instructions 
-- please , the project use TailwindCss for styling , try to use it since its very simple to learn .

-- dont use scss cause it support css preprocessing out of the box .

-- if you want extra classes others than the existing ones in tailwind , go to tailwind.config.js and extend ( to see how to extend tailwind go to documentation on their website , very simple)

-- never use regid (fixed color values in code ) like ( color:#F25462) or text-primary , i saw that you are using it in the code . this is not good practice to have , instead define the design system in global file (in our case this file is tailwind.conf.js , and name colors like ( primary, secondary, gray, light-gray , error ,...)
). then in code you do like ( bg-primary text-gray, text-error, border-ligght-gray ...).
-- same thisng with fontSize , ( in tailwind you can ues text-sx instead of text-[12px]), if you want new font size , extend tailwind fontSize array and add new one and name it like ( xxs:"9px") then use it like (text-xxs)
### why ?
imagine at some point we want to change the colors of the site or want to change one color ( instead of blue we do purpel ) if its hard coded you have to search all places and replace witch is painful .

-- use typescript instead of javascript , this can save us from basic errors that may cause the website to crash because of some dump errors in types .

-- a good practice also is to have index.tsx (index.js if using JS) in each directory , this file exports the components that will be used externally from this directory . this is very good to learn and have as practice .

-- in Next.js never use <img src="some img"> , this works but its not performant, instead use <Image src="some image" width={value} height={value} {...other props}>. <Image/> is a nextjs component for improving performance , and other aspects like responsivness and image formating , blur ... 

-- in Next.js never use <a href="some link"> ,  instead use <Link href="some link"><a>Lint text</a></Link>. <Link/> is a nextjs component for navigating between pages, its also used to iprove performance(for example the linked page will only be loaded in background when the link enter the viewport) .

-- also i saw in some cases a bad practice in css , like width:1024px ; never fix large widths , imagin what will happen in smaller screens ( smaller than 1024px , there is many ways to solve this ( max-width:1024px; width:100%; ) for example )

please see some documentation about tailwindCss and NextJs , also Typescript if you dont know already ( it only require 2h each to get the basics  )

###  git workflow like this 

any changes will be made to the dev branch

for example : if you have new feature :
1-create new branch based on the dev branch ( not master )
2-do changes and commits on the new branch 
3-merge these changes to dev branch .

before merging any commit to master branch we need to do some basic reviews and tests .