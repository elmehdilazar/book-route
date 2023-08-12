<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">Vue book</a>
        <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="my-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  
                     <router-link to="/" class="nav-link">Home</router-link> |

                </li>
                <li class="nav-item active">
                     <router-link to="/addbook" class="nav-link">addbook</router-link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>