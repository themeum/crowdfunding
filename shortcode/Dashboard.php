<?php
/**
 * WP-Crowdfunding dashboard Shortcodes
 *
 * @category   Crowdfunding
 * @package    Shortcode
 * @author     Themeum <www.themeum.com>
 * @copyright  2019 Themeum <www.themeum.com>
 * @since      2.1.0
 */

namespace WPCF\shortcode;
defined( 'ABSPATH' ) || exit;

class Dashboard {
    /**
     * Dashboard Constructor
     * @since 2.1.0
     */
    function __construct() {
        add_action( 'init', array( $this, 'init_dashboard' ) );
    }

    /**
     * Enqueue dashboard assets and add shortcode
     * @since   2.1.0
     * @access  public
     */
    public function init_dashboard() {
        add_action( 'wp_enqueue_scripts',    array($this, 'dashboard_assets') );
        add_shortcode( 'wpcf_dashboard', array( $this, 'dashboard_callback' ) );
    }

    /**
     * Enqueue dashboard assets
     * @since   2.1.0
     * @access  public
     */
    function dashboard_assets() {
        if (!is_user_logged_in()) {
            return false;
        }
        //dashboard scripts
        $api_namespace = WPCF_API_NAMESPACE . WPCF_API_VERSION;
        $page_id = get_option('wpneo_crowdfunding_dashboard_page_id');
        $form_page_id = get_option('wpneo_form_page_id');

        $currency_symbol = (get_woocommerce_currency_symbol()) ? get_woocommerce_currency_symbol() : '$';
        $decimal_separator = (wc_get_price_decimal_separator()) ? wc_get_price_decimal_separator() : '.';
        $thousand_separator = (wc_get_price_thousand_separator()) ? wc_get_price_thousand_separator() : ',';
        $decimals = (wc_get_price_decimals()) ? wc_get_price_decimals() : 2;
        
        if( get_the_ID() && get_the_ID() == $page_id ) {
            $active_pro = ( file_exists( WP_PLUGIN_DIR . '/' . WPCF_PRO_BASENAME ) && is_plugin_active( WPCF_PRO_BASENAME ) );
            wp_enqueue_script( 'chart.bundle.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js', array('jquery'), '', true );
            wp_enqueue_script( 'wpcf-dashboard-script', WPCF_DIR_URL.'assets/js/dashboard.js', array('jquery'), WPCF_VERSION, true );
            wp_localize_script( 'wpcf-dashboard-script', 'WPCF', array (
                'site_url'          => site_url(),
                'rest_url'          => rest_url( $api_namespace ),
                'assets'            => WPCF_DIR_URL.'assets/',
                'nonce'             => wp_create_nonce( 'wpcf_dasboard_nonce' ),
                'create_campaign'   => get_permalink( $form_page_id ),
                'active_pro'        => $active_pro,
                'currency'          => array(
                    'symbol'        => $currency_symbol,
                    'd_separator'  	=> $decimal_separator,
                    't_separator' 	=> $thousand_separator,
                    'decimals'      => $decimals,
                )
            ));
        }

        wp_enqueue_script('fontawesome', 'https://kit.fontawesome.com/7617ec241a.js', array(), WPCF_VERSION, true);

        // Dashboard Styles
        if('false' !== get_option('wpcf_enable_google_fonts', 'true')){
            wp_enqueue_style('roboto', $this->google_fonts(), array(), WPCF_VERSION);
        }
    }

    /**
     * Dashboard shortcode callback
     * @since     2.1.0
     * @access    public
     * @param     {object}  attr
     * @return    {html}    mixed
     */
    function dashboard_callback($attr) {
        if(!is_user_logged_in()) {
            $html = '<div class="woocommerce">';
            $html .= '<div class="woocommerce-info">'.__("Please log in first.","wp-crowdfunding").' <a class="wpneoShowLogin" href="#">'.__("Click here to login.","wp-crowdfunding").'</a></div>';
            $html .= wpcf_function()->login_form();
            $html .= '</div>';
            return $html;
        }
        return '<div id="wpcf-dashboard"></div>';
    }

    /**
     * Register Google fonts.
     *
     * @since 2.1.0
     * @return string Google fonts URL for the plugin.
     */
    function google_fonts() {
        $google_fonts = apply_filters(
            'wpcf_google_font_families', array(
                'roboto' => 'Roboto:300,400,400i,500,500i,700',
            )
        );
        $query_args = array(
            'family' => implode( '|', $google_fonts ),
            'subset' => rawurlencode( 'latin,latin-ext' ),
            'display' => 'swap'
        );
        $fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
        return $fonts_url;
    }

}
