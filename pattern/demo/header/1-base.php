<?php /*
Title: Header
*/ ?>

<header class="header u-fill-opaque-overlay u-container-md">
    <div>
        
        <div class="header__body grid g-gutter-x g-stretch-last g-center">
            <div>
                <?php printPattern('demo/logo/reverse'); ?>
            </div>
            
            <div>
                
                <div class="u-visible-xs u-text-right">
                    <a href="#" class="btn" data-cc-action="activate" data-cc-target="drawer-nav">
                        <?php printSvg('general', 'menu'); ?>
                        <span class="u-visually-hidden">Menu</span>
                    </a>
                </div>
                
                <div class="grid g-gutter-x g-stretch-first u-hidden-xs header__main">
                    <div class="header__child">
                        <ul class="nav nav--inline nav--space nav--primary">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div class="header__child">
                        
                        <div class="grid g-stretch-last g-gutter-x">
                            
                            <div>
                                <ul class="nav nav--inline nav--space-around header__secondary-nav">
                                    <li>
                                        <a href="#">
                                            <span class="u-visually-hidden">Twitter</span>
                                            <svg class="icon--header icon--twitter">
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/build/img/vectors/social/symbol/sprite-symbol.svg#twitter"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="u-visually-hidden">Github</span>
                                            <svg class="icon--header icon--github">
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/build/img/vectors/social/symbol/sprite-symbol.svg#github"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="u-hidden-lg u-hidden-xl">
                                        <a href="#" class="btn--inline" data-cc-action="activate" data-cc-target="drawer-search">
                                            <svg class="icon--header icon--search">
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/build/img/vectors/general/symbol/sprite-symbol.svg#search"></use>
                                            </svg>
                                            <span class="u-visually-hidden">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="u-hidden-xs u-hidden-sm u-hidden-md">
                                <form>
                                    <input type="search" placeholder="Search" class="search-input">
                                </form>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
        
    </div>
    
</header>