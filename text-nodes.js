import { state } from "./script.js";

export const textNodes = [
    {
        id: 1,
        text: 'You turn around and you see darkness, as the shimmering lightbulbs flicker and die away. In front of you, the light doesn’t reach too far, but it seems to follow your way, along with the soft buzzing of electricity. A few steps in front of you the hallway opens up, splitting before you like a trident. Three identical tunnels stretch far in different directions, as if quietly waiting for your decision.',
        options: [
            {
                text: 'GO LEFT',
                nextText: 2
            },
            {
                text: 'GO STRAIGHT AHEAD',
                nextText: 6
            },
            {
                text: 'GO RIGHT',
                nextText: 12
            }
        ]
    },
    {
        id: 2,
        text: 'This way seems to go down… or up… just when you think you can rely on your senses, the reality changes direction. The greyish stone texture is all you can perceive and you slowly realize you can no longer tell the walls, floor and ceiling apart. Almost unnoticeably everything seems to tighten around you as the hallway narrows little by little in its unnatural twisting, even though all that you see is a straight path ahead.',
        options: [
            {
                text: 'TURN BACK',
                nextText: 1
            },
            {
                text: 'CONTINUE',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'As you move forward, step by step, you notice that all the few details you were able to see are fading. No more cracks in the walls, no more dust on the floors. You don’t feel any cold anymore and you realize your steps make no sound as they hit the stone tiles on the floor.',
        options: [
            {
                text: 'TURN BACK',
                nextText: 1
            },
            {
                text: 'CONTINUE',
                nextText: 4,
            }

        ]
    },
    {
        id: 4,
        text: 'Your senses are dampening and you are no longer sure if you are walking straight. You feel the floor twisting and turning under your feet, yet your eyes work hard to assure you nothing is happening. Everything around you seems to get brightened by a white, warmthless light that looks like it’s coming from everywhere all at once.',
        options: [
            {
                exception: true,
                text: 'TURN BACK', 
                nextText: 5 
            },
            {
                text: 'CONTINUE',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        className: 'white',
        text: 'You look down at yourself and you can’t see any of your limbs or any other parts of the body you know should be there. Your sense of proprioception evaporates like a fine mist as everything around you fades to a calming whiteness. You don’t know why, but you want to rest in the numb embrace of the evanescence.',
        options: [
            {
                white: true,
                text: 'STAY',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'As you proceed to move forward, you notice the hallway opening up and becoming wider. It smells damp and dusty and your steps echo heavier and heavier on the concrete floor. You hear a faint child’s laughter somewhere far ahead, coming from the shadows and lingering around you for a second. The blue neon lights covered in spider webs that guide your steps are whirring in a sharp pitch.',
        options: [
            {
                text: 'TURN BACK',
                nextText: 1
            },
            {
                text: 'CONTINUE',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'Your path is cut abruptly by a huge heavy metal door. If you come closer you are able to tell that it has not been opened in a very long time. The handles are dusty and rusted. Listening closely, you can almost hear the faint laughter coming behind it and a bit of curiosity sparks within you. ',
        options: [
            {
                text: 'TURN BACK',
                nextText: 1
            },
            {
                id: 2,
                text: 'OPEN DOOR',
                requiredState: () => {return state},
                nextText: 8
            }
        ]
    },
    {
        // The OPEN DOOR key Requirement
        id: 8,
        check: [ {
            text: 'You try to push and pull with all your might, but nothing happens. You look closer and you notice a lock that would most certainly fit a key.',
            options: [
                {
                    text: 'TURN BACK',
                    nextText: 1
                }
            ],
        },
        {
              text: 'After a couple of tries, the lock finally clicks open. As you slowly push the doors, you hear the strong echo of child’s laughter fading in the large space of the room that unfolds before you. It is mostly dark and so big you are unable to see the corners, walls or even the ceiling. The only light is coming from the middle, shapeless and sourceless, illuminating a large stone pedestal, that strangely resembles an operating table.',
        options: [
            {
                text: 'LOOK AROUND',
                nextText: 9
            },
            {
                text: 'GO TO THE TABLE',
                nextText: 10
            }
        ] 
        }],
     
    },
    {
        id: 9,
        text: 'You walk around a bit, trying to find out where the disembodied laughter came from, but you find nothing. The room is mostly empty and dark. Looking up, you notice that there are several cables and perfusion looking devices hanging over the operating table, starting from the source of light above. You feel strangely drawn to the cold stone, like knowing you are actually supposed to be there. ',
        options: [
            {
                text: 'GO TO THE TABLE',
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: 'You run your fingers over the coarse stone, briefly wondering why it doesn’t appear to be dusty. The noise of neon lightbulbs buzzing in your ears is starting to make you feel tired and weak. Out of nowhere a singe persisting thought pops in your mind, whispering that you might as well lie down a little bit on that cement surface. The place is forsaken anyway.',
        options: [
            {
                text: 'TURN BACK',
                nextText: 1
            },
            {
                text: 'LIE DOWN ON THE TABLE',
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: ' As you prepare to lie on your back you start to hear voices, small echoes, faint but close to your ears. At the edge of your vision you sense some shadowy movement, but it might just as well be an illusion. Your eyelids fall heavy and everything gets blurrier and blurrier. And it is dark…',
        options: [
            {
                text: 'SLEEP',
                nextText: -1
            }
        ]
    }, 
    {
        id: 12,
        text: 'Walking down this hallway seems to be never-ending, too long to even be possible, and you can subtly tell that the distances in your perception are skewed. After contemplating turning back for a while, you end up at a bifurcation.',
        options: [
            {
                text: 'TURN LEFT',
                nextText: 13
            },
            {
                text: 'TURN RIGHT',
                nextText: 18
            }
        ]
    },
    {
        id: 13, 
        text: 'Starting to walk and turn, a creeping familiarity begins to set around you in those hallways. It is like you somehow know these places, maybe from a dream, maybe from another story — yours? Someone else’s? Who can even tell — yet you have tried oh-so-hard to forget them.',
        options: [
            {
                text: 'CONTINUE WALKING',
                nextText: 15
            },
            {
                text: 'STOP',
                nextText: 14
            }
        ]
    },
    {
        id: 14,
        text: "With each second that passes you feel increasingly dizzy. Trying to focus on any thing and any detail around you makes you head spin and you feel the strength slowly dripping away from your limbs. It is difficult to remember where you were going. Why are you here? What do you need to find…?",
        options: [
            {
                text: 'CONTINUE WALKING',
                nextText: 15
            }
        ]
    },
    {
        id: 15,
        text: 'You have lost all sense of how long you’ve gone by now. You hear only the sound of your own steps and heavy breathing. After an excruciating long while the contour of a small door appears on the wall far in the distance, as if out of nowhere. Getting closer, you notice it’s old and white, with the paint scaping off in places. And suddenly you need to steady yourself with an arm on the wall because you feel like fainting. That door…',
        options: [
            {
                text: 'TURN BACK',
                nextText: 1
            },
            {
                text: 'TRY TO OPEN DOOR',
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: 'Ignoring the frozen void in your stomach, you grasp the door handle and press down, as slowly as you can. The short action seems to last and eternity and every millimeter your hand moves even further down is sending cold shivers down your spine. When the door cracks open in the end, you get an uncanny remembrance of what’s waiting for you behind it…',
        options: [
            {
                text: 'TURN BACK',
                nextText: 1
            },
            {
                text: 'ENTER THE DARK ROOM',
                nextText: 17
            }
        ]
    },
    {
        id: 17,
        text: 'You let the blackness welcome you in it’s embrace, feeling the dark caress on your skin. It is a touch that makes you want to break down and throw up your insides. Your eyes gaze into the velvety darkness as if blind, and you can fell the open door distancing itself rapidly from you. Being here is unbearable, and yet, you’re still here. You take a deep breath, and let go…',
        options: [
            {
                text: 'BREATHE OUT',
                nextText: 0 // Sends the player to the finale panel
            }
        ]
    }, 
    {
        id: 18, 
        text: 'You walk and walk, trying to escape the echoing sound of your footstepYou walk a bit faster, glancing hastily over your shoulder and trying to escape the echoing sound of your footsteps that creeps up behind you like a hungry wolf. Between flickering lights, you reach another choice…',
        options: [
            {
                text: 'TURN LEFT',
                nextText: 19
            }, 
            {
                text: 'TURN RIGHT',
                nextText: 20
            }
        ]
    }, 
    {
        id: 19,
        text: 'You turn left as you continue your way, picking up the pace and staring to feel an urgency to your actions. How much time would you be able to still spend down in those tunnels? Is there even a way for the air to get in? You try to look around more carefully, forcing your senses to sharpen.',
        options: [
            {
                text: 'TURN LEFT',
                nextText: 21
            }, 
            {
                text: 'TURN RIGHT',
                nextText: 21
            }
        ]
    }, 
    {
        id: 20,
        text: 'You turn right as you continue your way, picking up the pace and staring to feel an urgency to your actions. How much time would you be able to still spend down in those tunnels? Is there even a way for the air to get in? You try to look around more carefully, forcing your senses to sharpen.',
        options: [
            {
                text: 'TURN LEFT',
                nextText: 21
            }, 
            {
                text: 'TURN RIGHT',
                nextText: 21
            }
        ]
    },
    {
        id: 21, 
        text: 'You notice it only through a rapid shine at first, when the blue neon light flickers off the metallic surface. You stop, and slowly get closer, your eyes drawn in to this new small detail that finally breaks out of the monotonous décor of dusty concrete walls. Your hand hovers over the key as you feel an anticipatory tremble in your fingertips.',
        options: [
            {
                text: 'PICK UP THE KEY',
                setState: { hasKey: true },
                nextText: 22
            },
            {
                text: 'LEAVE THE KEY',
                nextText: 22
            }
        ]
    },
    {
        id: 22,
        text: 'You start to walk again, trying to remember how many lefts and rights you already had. Creating a mental map of this place is utterly confusing and dizzying. Something is not entirely right about these hallways. Soon enough, you’re face with that same old choice…',
        options: [
            {
                text: 'TURN LEFT',
                nextText: 23
            },
            {
                text: 'TURN RIGHT',
                nextText: 23
            },
            {
                text: 'TURN BACK',
                nextText: 1
            },
        ]
    },
    {
        id: 23,
        text: '…how many lefts and rights you already had. Creating a mental map of this place is utterly confusing and dizzying. Something is not entirely right about…',
        options: [
            {
                text: 'TURN LEFT',
                nextText: 24
            },
            {
                text: 'TURN RIGHT',
                nextText: 24
            },
            {
                text: 'TURN BACK',
                nextText: 1
            },
        ]
    },
    {
        id: 24,
        text: '…these hallways. Soon enough, you’re face with that same old choice, and you start to walk again trying to remember…',
        options: [
            {
                text: 'TURN LEFT',
                nextText: 23
            },
            {
                text: 'TURN RIGHT',
                nextText: 23
            },
            {
                text: 'TURN BACK',
                nextText: 1
            },
        ]
    },
]; 