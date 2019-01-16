var router = require('express').Router();
var popularList = [{
        "vote_count": 2464,
        "id": 297802,
        "video": false,
        "vote_average": 6.9,
        "title": "Aquaman",
        "popularity": 478.364,
        "poster_path": "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
        "original_language": "en",
        "original_title": "Aquaman",
        "genres": [
        {
            "id": 28,
            "name": "Action"
        }, {
            "id": 14,
            "name": "Fantasy"
        }, {
            "id": 878,
            "name": "Science Fiction"
        }, {
            "id": 12,
            "name": "Adventure"
        }],
        "homepage": "http://www.aquamanmovie.com",
        "backdrop_path": "/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
        "adult": false,
        "overview": "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.",
        "release_date": "2018-12-07"
    },
    {
        "vote_count": 719,
        "id": 424783,
        "video": false,
        "vote_average": 6.6,
        "title": "Bumblebee",
        "popularity": 291.57,
        "poster_path": "/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
        "original_language": "en",
        "original_title": "Bumblebee",
        "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
        ],
        "homepage": "http://bumblebeemovie.com",
        "backdrop_path": "/8bZ7guF94ZyCzi7MLHzXz6E5Lv8.jpg",
        "adult": false,
        "overview": "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
        "release_date": "2018-12-15"
    },
    {
        "vote_count": 139,
        "id": 504172,
        "video": false,
        "vote_average": 6.3,
        "title": "The Mule",
        "popularity": 233.051,
        "poster_path": "/t0idiLMalKMj2pLsvqHrOM4LPdQ.jpg",
        "original_language": "en",
        "original_title": "The Mule",
        "genres": [
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 53,
            "name": "Thriller"
        }
        ],
        "homepage": "http://www.themulefilm.com",
        "backdrop_path": "/bkc4AY6FTa3yNqrshE9b1elDzPt.jpg",
        "adult": false,
        "overview": "A 90-year-old horticulturalist and Korean War veteran is caught transporting $3 million worth of cocaine through Illinois for a Mexican drug cartel.",
        "release_date": "2018-12-14"
    },
    {
        "vote_count": 589,
        "id": 400650,
        "video": false,
        "vote_average": 6.8,
        "title": "Mary Poppins Returns",
        "popularity": 183.732,
        "poster_path": "/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
        "original_language": "en",
        "original_title": "Mary Poppins Returns",
        "genres": [
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 35,
            "name": "Comedy"
        }
        ],
        "homepage": "https://movies.disney.com/mary-poppins-returns",
        "backdrop_path": "/cwiJQXezWz876K3jS57Sq56RYCZ.jpg",
        "adult": false,
        "overview": "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
        "release_date": "2018-12-19"
    },
    {
        "vote_count": 553,
        "id": 480530,
        "video": false,
        "vote_average": 6.5,
        "title": "Creed II",
        "popularity": 160.019,
        "poster_path": "/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
        "original_language": "en",
        "original_title": "Creed II",
        "genres": [
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 28,
            "name": "Action"
        }
        ],
        "homepage": "http://creedthemovie.com",
        "backdrop_path": "/8yqLPNwNCtpOPc3XkOlkSMnghzw.jpg",
        "adult": false,
        "overview": "Follows Adonis Creed's life inside and outside of the ring as he deals with new found fame, issues with his family, and his continuing quest to become a champion.",
        "release_date": "2018-11-21"
    },
    {
        "vote_count": 1071,
        "id": 324857,
        "video": false,
        "vote_average": 8.5,
        "title": "Spider-Man: Into the Spider-Verse",
        "popularity": 156.562,
        "poster_path": "/laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg",
        "original_language": "en",
        "original_title": "Spider-Man: Into the Spider-Verse",
        "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 35,
            "name": "Comedy"
        }
        ],
        "homepage": "http://www.intothespiderverse.movie",
        "backdrop_path": "/shROD2YqREzo4TuonTsTVnnjpPC.jpg",
        "adult": false,
        "overview": "Miles Morales is juggling his life between being a high school student and being Spider-Man. However, when Wilson \"Kingpin\" Fisk uses a super collider, another Spider-Man from another dimension, Peter Parker, accidentally winds up in Miles' dimension, joining others from across the \"Spider-Verse\".",
        "release_date": "2018-12-07"
    },
    {
        "vote_count": 10015,
        "id": 315635,
        "video": false,
        "vote_average": 7.4,
        "title": "Spider-Man: Homecoming",
        "popularity": 35.964,
        "poster_path": "/5x00yQZ3Mcz7duwMKc9GE8oZjFf.jpg",
        "original_language": "en",
        "original_title": "Spider-Man: Homecoming",
        "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 18,
            "name": "Drama"
        }
        ],
        "homepage": "http://www.spidermanhomecoming.com",
        "backdrop_path": "/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
        "adult": false,
        "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
        "release_date": "2017-07-05"
    }, {
        "vote_count": 8191,
        "id": 374720,
        "video": false,
        "vote_average": 7.4,
        "title": "Dunkirk",
        "popularity": 31.816,
        "poster_path": "/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
        "original_language": "en",
        "original_title": "Dunkirk",
        "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        }
        ],
        "homepage": "http://www.dunkirkmovie.com/",
        "backdrop_path": "/fudEG1VUWuOqleXv6NwCExK0VLy.jpg",
        "adult": false,
        "overview": "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
        "release_date": "2017-07-19"
    },
    {
        "vote_count": 7075,
        "id": 339403,
        "video": false,
        "vote_average": 7.4,
        "title": "Baby Driver",
        "popularity": 29.19,
        "poster_path": "/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
        "original_language": "en",
        "original_title": "Baby Driver",
        "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 80,
            "name": "Crime"
        }
        ],
        "homepage": "http://www.babydriver-movie.com",
        "backdrop_path": "/goCvLSUFz0p7k8R10Hv4CVh3EQv.jpg",
        "adult": false,
        "overview": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
        "release_date": "2017-06-28"
    }, {
        "vote_count": 3696,
        "id": 339964,
        "video": false,
        "vote_average": 6.6,
        "title": "Valerian and the City of a Thousand Planets",
        "popularity": 25.211,
        "poster_path": "/jfIpMh79fGRqYJ6PwZLCntzgxlF.jpg",
        "original_language": "en",
        "original_title": "Valerian and the City of a Thousand Planets",
        "genres": [
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 28,
            "name": "Action"
        }
        ],
        "homepage": "https://www.imdb.com/title/tt2239822/",
        "backdrop_path": "/5rYnygKCkmqWuMv1O5yAnzGF8gV.jpg",
        "adult": false,
        "overview": "In the 28th century, Valerian and Laureline are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and cultures. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.",
        "release_date": "2017-07-20"
    }, {
        "vote_count": 3304,
        "id": 341013,
        "video": false,
        "vote_average": 6.3,
        "title": "Atomic Blonde",
        "popularity": 22.26,
        "poster_path": "/kV9R5h0Yct1kR8Hf8sJ1nX0Vz4x.jpg",
        "original_language": "en",
        "original_title": "Atomic Blonde",
        "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 53,
            "name": "Thriller"
        }
        ],
        "homepage": "http://www.atomicblonde.com/",
        "backdrop_path": "/g3hni0i9iAQ13jDGOFWavJFlojc.jpg",
        "adult": false,
        "overview": "An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",
        "release_date": "2017-07-26"
    }, {
        "vote_count": 4810,
        "id": 281338,
        "video": false,
        "vote_average": 7,
        "title": "War for the Planet of the Apes",
        "popularity": 21.904,
        "poster_path": "/n9sZe4fXA4mF5YW4BlTmspRaUGy.jpg",
        "original_language": "en",
        "original_title": "War for the Planet of the Apes",
        "genres": [
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10752,
            "name": "War"
        }
        ],
        "homepage": "http://www.foxmovies.com/movies/war-for-the-planet-of-the-apes",
        "backdrop_path": "/ulMscezy9YX0bhknvJbZoUgQxO5.jpg",
        "adult": false,
        "overview": "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
        "release_date": "2017-07-11"
    }
];

router.get('/:id', function (req, res) {
    var movieId = req.params.id;
    var movieIndex = 0;

    popularList.forEach(function (item, index) {
        if (item.id == movieId) {
            movieIndex = index;
        }
    });

    var movieFileName = popularList[movieIndex].title.replace(/ +/g, ""); // replace whitespace
    movieFileName = movieFileName.replace(/-+/g, ""); // replace whitespace
    movieFileName = movieFileName.replace(/:+/g, ""); // replace colon

    res.render('movie', {
        movie: popularList[movieIndex],
        movieFileName
    });
});

module.exports = router;
