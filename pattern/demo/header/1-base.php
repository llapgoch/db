<?php /*
Title: Header
*/ ?>

<header class="header u-fill-opaque-25">
    <div class="u-container-lg">
        
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
                    <div>
                        <ul class="nav nav--inline nav--space nav--primary u-fill-neutral-black">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        
                        <div class="grid g-stretch-last">
                            
                            <div>
                                <ul class="nav nav--inline nav--space header__secondary-nav">
                                    <li>
                                        <a href="#">
                                            <span class="u-visually-hidden">Twitter</span>
                                            <?php printSvg('social', 'twitter'); ?>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="u-visually-hidden">Github</span>
                                            <?php printSvg('social', 'github'); ?>
                                        </a>
                                    </li>
                                    <li class="u-hidden-lg u-hidden-xl">
                                        <a href="#" class="btn" data-cc-action="activate" data-cc-target="drawer-search">
                                            <?php printSvg('general', 'search'); ?>
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