export default [
    {
        title: 'Front End Developer Portfolio',
        imgUrl: './front-end-dev-portfolio-preview.webp',
        stack: ['HTML', 'CSS','React.js','Vite' ,'Tailwind', 'Firebase'],
        link: 'https://stefanrotaru.eu/',
        shortDescription: 'My very first personal Portfolio Website.',
        longDescription: {
            title: 'Front End Developer Portfolio',
            content: [
                'This is my very first personal Portfolio Website which is hosted on my own domain (https://stefanrotaru.eu/).',
                'This project is built with React.js and Tailwind CSS. It is bundled with Vite and hosted on Firebase.',
                'My goals with this project were to:',
                [
                    '- Build a website that is easy to maintain and update;',
                    '- Connect a domain (my very own) to Firebase and configure SSL/TLS;',
                    '- Get used with the Tailwind CSS framework;',
                    '- Get used with the Firebase hosting service;',
                    '- Get a great Google Lighthouse score;'
                ],
                'The website is fully responsive and it is optimized for mobile devices.',
                'I\'m very happy with the result and I\'m constantly adding more content to my Portfolio Website, such as new projects and new features.'
            ]
        },
        repo: 'https://github.com/stefrotaru/my_portfolio'
    },
    {
        title: 'Mqtt chat client',
        imgUrl: './mqtt-chat-app-preview.webp',
        stack: ['GO', 'Mqtt','Bubbletea'],
        link: 'https://github.com/stefrotaru/mqtt-chat',
        shortDescription: 'Simple MQTT chat client that is used to demonstrate the use of the MQTT protocol together with the Go programming language.',     
        longDescription: {
            title: 'Mqtt chat client',
            content: [
                'This is a simple MQTT chat client that is used to demonstrate the use of the MQTT protocol together with the Go programming language.',
                'The client connects to the MQTT broker running on the same machine on port 1883 and subscribes to a default topic (you can change the topic name in the code below). It also publishes to the same topic.',
                'The client uses the bubbletea library to create a terminal UI. The UI consists of a header, a footer and a text input field. The header shows the topic name and the footer shows the text input field. The messages are displayed in the middle of the screen. The client allows to send text messages and action messages (e.g. user joined/left the chat) by typing them in the text input field and pressing "Enter". It also allows to send commands by typing them in the text input field and pressing "Enter". For now, the following commands are supported:',
                [
                    '/quit - The client disconnects from the MQTT broker and exits.',
                    '/hello - The client sends an action message to the chat room saying that the user has joined the chat.'
                ],
                'The client also allows to use the "Tab" key to auto-complete commands. For example, if you type "/h" and press "Tab", the client will auto-complete the command to "/hello".',
                'The project also includes a docker compose file which deploys a compatible eclipse MQTT broker for the project.'
            ]
        },
        repo: 'https://github.com/stefrotaru/mqtt-chat'
    },
    {
        title: 'Multi Step Form',
        imgUrl: './react_multi-step-form.webp',
        stack: ['HTML', 'CSS','React.js', 'Redux', 'Vite' ,'Sass'],
        link: 'https://stefrotaru.github.io/react-multi_step_form/',
        shortDescription: 'This is a multi-step form built with React and Redux for a advanced challenge from Frontend Mentor.',
        longDescription: {
            title: 'Multi Step Form',
            content: [
                'This is a solution to the Multi-step form challenge on Frontend Mentor (https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).',
                'Users should be able to:',
                [
                    '- Complete each step of the sequence;',
                    '- Go back to a previous step to update their selections;',
                    '- See a summary of their selections on the final step and confirm their order',
                    '- View the optimal layout for the interface depending on their device\'s screen size',
                    '- Receive form validation messages if: a field has been missed/the email address is not formatted correctly'
                ],
                'With this Front End Mentor challenge I have refreshed my React/Redux knowledge.',
                'My goals with this project were to:',
                [
                    '- Capture the form fields values into a Redux store, composed of multiple slices, each slice with it\'s own scope;',
                    '- Build a efficient SPA;',
                    '- Consume json data;',
                    '- Use as few external libraries as possible;',
                    '- Practice the BEM methodology wits Scss;'
                ]
            ]
        },
        repo: 'https://github.com/stefrotaru/react-multi_step_form'
    },
    {
        title: 'Splitter',
        imgUrl: './splitter-preview.webp',
        stack: ['HTML', 'SCSS','JS'],
        link: 'https://stefrotaru.github.io/tip-calculator-app-main/',
        shortDescription: 'Tip calculator app built with HTML, SCSS and JS. This is a challenge from Frontend Mentor.',
        longDescription: '',
        repo: 'https://github.com/stefrotaru/tip-calculator-app-main'
    },
    {
        title: 'Expenses React App',
        imgUrl: './expenses-app-preview.webp',
        stack: ['HTML', 'CSS', 'JS', 'React.js'],
        link: 'https://stefrotaru.github.io/Expenses-react-app/',
        shortDescription: 'React app that keeps track of your expenses. The main objective of this app was to get used with the useState react hook.',
        longDescription: '',
        repo: 'https://github.com/stefrotaru/Expenses-react-app'
    },
    {
        title: 'More projects coming soon',
        imgUrl: '',
        stack: [],
        link: 'https://github.com/stefrotaru/',
        shortDescription: '',
        longDescription: '',
        repo: ''
    },
]