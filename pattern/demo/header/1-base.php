<?php /*
Title: Header
*/ ?>

<header>
    <div class="u-container">
        
        <div class="grid">
            <div class="g-col-xs-6">
                <?php printPattern('demo/logo/base'); ?>
            </div>
            
            <a href="#" class="btn" data-cc-action="activate" data-cc-target="drawer-nav"><?php printSvg('general', 'menu'); ?> Burger</a>
            
            <div class="u-hidden-xs g-col-sm-6">
                <ul class="nav nav--inline nav--space">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            
            <div class="g-col-xs-6">
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