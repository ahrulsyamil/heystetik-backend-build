"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4104a60e-ffd2-5f7d-8583-567e538e59b3")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.reportReasonSeed = void 0;
exports.reportReasonSeed = [
    {
        name: 'Sharing personal information',
        description: 'Sharing personal phone numbers and home addresses|Sharing financial and payment information, such as bank accounts and credit card numbers|Sharing login information, such as usernames and passwords|Sharing identity documentation or numbers, such as passports and social security numbers',
    },
    {
        name: 'Hate and harassment',
        sub_reports: {
            create: [
                {
                    name: 'Hate speech and hateful behaviors',
                    description: 'Showing or promoting violence, discrimination, and other harms, including claiming supremacy on the basis of personal characteristics, such as race, religion, gender, and sexual orientation|Demeaning someone on the basis of these personal characteristics, including using hateful slurs',
                },
                {
                    name: 'Harrassment and bullying',
                    description: 'Showing or promoting insulting someone or threatening to insult someone, including using profanity or obscene language to degrade them|Showing, promoting, or threatening harassment or bullying, physical or otherwise, of others - including coordinated harassment|Showing, promoting, or threatening behaviors such as doxing, blackmailing, revealing, or calling for the reveal of private or sensitive information',
                },
            ],
        },
    },
    {
        name: 'Misinformation',
        sub_reports: {
            create: [
                {
                    name: 'Election misinformation',
                    description: 'Missinformation on how to vote or run for office|misinformation on final election results or outcomes',
                },
                {
                    name: 'Harmful misinformation',
                    description: 'Misinformation that poses a risk to public safety or may cause panic, such as using old footage of a past event and falsely presenting it as current, or spreading inaccurate claims that essential items like food or water are no longer available|Medical misinformation that poses a risk to public health, such as misleading statements about vaccines, and inaccurate medical advice that discourages people from getting appropriate medical care|Climate change misinformation that contradicts well-established scientific consensus, such as denying the existence of climate change|Dangerous conspiracy theories that promote violence, hatred, or target individuals, such as those causing prejudice toward a specific group and cause harm',
                },
                {
                    name: 'Deepfakes, synthtic, media, and manipulate',
                    description: 'Synthetic or manipulated media showing realistic scenes that are not prominently disclosed or labeled in the video|Synthetic media that contains the likeness (visual or audio) of a real person when used for political or commercial endorsements, or if violative of our community guidelines|Material that has been edited in a way that may mislead a person about real-world events|Synthetic media showing a public figure in artistic and educational contexts, such as a celebrity doing a popular dance, and a historical figure featured in a history lesson, is allowed',
                },
            ],
        },
    },
    {
        name: 'Other',
        description: 'Our priority is to provide a safe and supportive environment. We also encourage authentic interactions by keeping deceptive content and accounts off our platform. Select this if your reason for reporting does not fall under any of the listed categories',
    },
];
//# sourceMappingURL=report-reason.seed.js.map
//# debugId=4104a60e-ffd2-5f7d-8583-567e538e59b3
