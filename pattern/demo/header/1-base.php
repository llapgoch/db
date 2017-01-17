<?php /*
Title: Header
*/ ?>

<header class="header u-fill-opaque-20">
    <div class="u-container">
        
        <div class="header__body grid g-stretch-last g-center">
            <div class="header__logo">
                <?php printPattern('demo/logo/reverse'); ?>
            </div>
            
            <div class="header__main">
                
                <div class="u-visible-xs u-text-right">
                    <a href="#" class="btn" data-cc-action="activate" data-cc-target="drawer-nav">
                        <?php printSvg('general', 'menu'); ?>
                        <span class="u-visually-hidden">Menu</span>
                    </a>
                </div>
                
                <div class="grid g-stretch-first u-hidden-xs">
                    <div>
                        <ul class="nav nav--inline nav--space nav--primary u-fill-neutral-black">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul class="nav nav--inline nav--space">
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
                        </ul>
                        
                        <a href="#" class="btn u-hidden-md" data-cc-action="activate" data-cc-target="drawer-search">
                            <?php printSvg('general', 'search'); ?>
                            <span class="u-visually-hidden">Search</span>
                        </a>
                        
                        <div class="u-hidden-xs u-hidden-sm">
                            <form>
                                <input type="search" placeholder="Search" class="search-input">
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        
    </div>
    
</header>