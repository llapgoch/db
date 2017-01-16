<?php /*
Title: Header
*/ ?>

<header class="header u-fill-opaque-20">
    <div class="u-container">
        
        <div class="grid g-center">
            <div class="g-col-md-6">
                
                <div class="grid g-center g-stretch-first">
                    <div>
                        <?php printPattern('demo/logo/reverse'); ?>
                    </div>
                    <div class="u-visible-xs u-visible-sm">
                        <a href="#" class="btn" data-cc-action="activate" data-cc-target="drawer-nav">
                            <?php printSvg('general', 'menu'); ?>
                            <span class="u-visually-hidden">Menu</span>
                        </a>
                    </div>
                </div>
                
            </div>
            
            <div class="u-hidden-xs u-hidden-sm g-col-md-6 u-fill-neutral-black">
                <ul class="nav nav--inline nav--space nav--primary">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            
            <div class="g-col-xs-6 u-hidden-xs u-hidden-sm">
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
            </div>
        
    </div>
    
</header>