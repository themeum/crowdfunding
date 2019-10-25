<?php
/**
 * WP-Crowdfunding campaign form API's
 *
 * @category   Crowdfunding
 * @package    APIs
 * @author     Themeum <www.themeum.com>
 * @copyright  2019 Themeum <www.themeum.com>
 * @version    Release: @1.0.0
 * @since      2.1.0
 */

namespace WPCF\APIs;
defined( 'ABSPATH' ) || exit;

class API_Campaign {
    /**
     * @constructor
     * @since 2.1.0
     */
    function __construct() {
        $this->current_user_id = get_current_user_id();
        add_action( 'init', array( $this, 'init_rest_api') );
        add_filter( 'wpcf_form_basic_fields', array( $this, 'form_basic_fields') );
        add_filter( 'wpcf_form_story_tools', array( $this, 'form_story_tools') );
        add_filter( 'wpcf_form_reward_types', array( $this, 'form_reward_types') );
        add_filter( 'wpcf_form_reward_fields', array( $this, 'form_reward_fields') );
        add_filter( 'wpcf_form_team_fields', array( $this, 'form_team_fields') );
    }

    /**
     * Init rest api
     * @since   2.1.0
     * @access  public
     */
    function init_rest_api() {
        add_action( 'rest_api_init', function() {
            $namespace = WPCF_API_NAMESPACE . WPCF_API_VERSION;
            $method_readable = \WP_REST_Server::READABLE;
            $method_creatable = \WP_REST_Server::CREATABLE;

            register_rest_route( $namespace, '/form-fields', array(
                array( 'methods' => $method_readable, 'callback' => array($this, 'get_form_basic_fields') ),
            ));
            register_rest_route( $namespace, '/story-tools', array(
                array( 'methods' => $method_readable, 'callback' => array($this, 'get_form_story_tools') ),
            ));
            register_rest_route( $namespace, '/sub-categories', array(
                array( 'methods' => $method_readable, 'callback' => array($this, 'sub_categories') ),
            ));
            register_rest_route( $namespace, '/states', array(
                array( 'methods' => $method_readable, 'callback' => array($this, 'get_states') ),
            ));
            register_rest_route( $namespace, '/reward-fields', array(
                array( 'methods' => $method_readable, 'callback' => array($this, 'get_form_reward_fields') ),
            ));
            register_rest_route( $namespace, '/team-fields', array(
                array( 'methods' => $method_readable, 'callback' => array($this, 'get_form_team_fields') ),
            ));
            register_rest_route( $namespace, '/save-campaign', array(
                array( 'methods' => $method_creatable, 'callback' => array($this, 'save_campaign') ),
            ));
        });
    }


    /**
     * Get campaign form fields
     * @since     2.1.0
     * @access    public
     * @return    [array]   mixed
     */
    function get_form_basic_fields() {
        $response = apply_filters( 'wpcf_form_basic_fields', [] );
        return rest_ensure_response( $response );
    }

    /**
     * Campaign form fields
     * @since     2.1.0
     * @access    public
     * @param     {fields}  fields
     * @return    [array]   mixed
     */
    function form_basic_fields($fields = []) {
        $cat_args = array(
            'taxonomy'      => 'product_cat',
            'hide_empty'    => false,
            'parent'        => 0
        );
        //Get is Crowdfunding Categories only
        $is_only_crowdfunding_categories = get_option('seperate_crowdfunding_categories');
        if ('true' === $is_only_crowdfunding_categories){
            $cat_args['meta_query'] = array(
                array(
                    'key' => '_marked_as_crowdfunding',
                    'value' => '1'
                )
            );
        }
        $categories = get_terms($cat_args);
        $res_categories = array();
        foreach($categories as $category) {
            $res_categories[] = array(
                'label' => $category->name,
                'value' => $category->term_id
            );
        }

        $countries = WC()->countries->countries;
        $res_countries = array();
        foreach($countries as $key => $country) {
            $res_countries[] = array(
                'label' => $country,
                'value' => $key
            );
        }

        $default_fields = array(
            //Information
            'campaign_info' => array(
                'category' => array(
                    'type'          => 'select',
                    'title'         => __("Campaign Catagory *", "wp-crowdfunding"),
                    'desc'          => __("Choose the Category That Most closely aligns with your project", "wp-crowdfunding"),
                    'placeholder'   => __("Select Catagory", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'options'       => $res_categories,
                    'required'      => true,
                    'show'          => true
                ),
                'sub_category' => array(
                    'type'          => 'select',
                    'title'         => __("Campaign Sub- Catagory", "wp-crowdfunding"),
                    'desc'          => __("Reach a more specific community by also choosing a subcategory", "wp-crowdfunding"),
                    'placeholder'   => __("Select Sub-Catagory", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'options'       => array(),
                    'required'      => false,
                    'show'          => true
                ),
                'types' => array(
                    'type'          => 'radio',
                    'title'         => __("Raising Money For *", "wp-crowdfunding"),
                    'desc'          => __("Estimated Shipping Date Rewards to be Recieved", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'options'       => array(
                        array(
                            'value' => 'individual',
                            'label' => __("Individual", "wp-crowdfunding"),
                            'desc'  => __("", "wp-crowdfunding"),
                            'class' => '',
                        ),
                        array(
                            'value' => 'business',
                            'label' => __("Business", "wp-crowdfunding"),
                            'desc'  => __("", "wp-crowdfunding"),
                            'class' => '',
                        ),
                        array(
                            'value' => 'non-profit',
                            'label' => __("Non-Profit", "wp-crowdfunding"),
                            'desc'  => __("", "wp-crowdfunding"),
                            'class' => '',
                        )
                    ),
                    'required'      => true,
                    'show'          => true
                ),
                'country' => array(
                    'type'          => 'select',
                    'title'         => __("Country *","wp-crowdfunding"),
                    'desc'          => __("", "wp-crowdfunding"),
                    'placeholder'   => __("Select Country", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'options'       => $res_countries,
                    'required'      => false,
                    'show'          => true,
                ),
                'state' => array(
                    'type'          => 'select',
                    'title'         => __("State *","wp-crowdfunding"),
                    'desc'          => __("", "wp-crowdfunding"),
                    'placeholder'   => __("Select State", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'options'       => array(),
                    'required'      => true,
                    'show'          => true,
                ),
            ),
            // Details
            'details' => array(
                'title' => array(
                    'type'          => 'text',
                    'title'         => __("Campaign Title *", "wp-crowdfunding"),
                    'desc'          => __("Write a Clear, Brief Title that Helps People Quickly Understand the Gist of your Project.", "wp-crowdfunding"),
                    'placeholder'   => __("", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'required'      => true,
                    'show'          => true,
                ),
                'subtitle' => array(
                    'type'          => 'text',
                    'title'         => __("Campaign Sub-Title", "wp-crowdfunding"),
                    'desc'          => __("Use Words People Might Search For..", "wp-crowdfunding"),
                    'placeholder'   => __("", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'required'      => false,
                    'show'          => true,
                ),
                'short_desc' => array(
                    'type'          => 'textarea',
                    'title'         => __("Campaign Description *", "wp-crowdfunding"),
                    'desc'          => __("Keep It Short. Just Small Brief About your Project", "wp-crowdfunding"),
                    'placeholder'   => __("", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'required'      => true,
                    'show'          => true,
                ),
                'tags' => array(
                    'type'          => 'tags',
                    'title'         => __("Tags", "wp-crowdfunding"),
                    'desc'          => __("Reach a more specific community by also choosing right Tags. Max Tag : 20", "wp-crowdfunding"),
                    'placeholder'   => __("", "wp-crowdfunding"),
                    'class'         => '',
                    'value'         => '',
                    'options'       => $this->get_form_tags(),
                    'required'      => false,
                    'show'          => true,
                ),
            ),
            // Media
            'media' => array(
                'video_link' => array(
                    'type'      => 'repeatable',
                    'title'     => __("Video", "wp-crowdfunding"),
                    'desc'      => __("Write a Clear, Brief Title that Helps People Quickly Understand the Gist of your Project.", "wp-crowdfunding"),
                    'button'    => '<i class="fa fa-plus"/> '.__('Add More Link', 'wp-crowdfunding'),
                    'fields'    => array(
                        'src' => array(
                            'type'          => 'text',
                            'placeholder'   => __("", "wp-crowdfunding"),
                            'required'      => true,
                            'show'          => true,
                        ),
                    ),
                    'value'     => '',
                    'open_first_item' => true,
                    'class'     => '',
                    'required'  => false,
                    'show'      => true,
                ),
                'video' => array(
                    'type'      => 'video',
                    'title'     => __("Video Upload", "wp-crowdfunding"),
                    'desc'      => __("Write a Clear, Brief Title that Helps People Quickly Understand the Gist of your Project.", "wp-crowdfunding"),
                    'button'    => '<i class="fa fa-file"/> '.__('Upload Video', 'wp-crowdfunding'),
                    'class'     => '',
                    'is_media'  => true,
                    'multiple'  => true,
                    'required'  => false,
                    'show'      => true
                ),
                'image' => array(
                    'type'      => 'image',
                    'title'     => __("Image Upload *","wp-crowdfunding"),
                    'desc'      => __("Dimention Should be 560x340px ; Max Size : 5MB","wp-crowdfunding"),
                    'button'    => '<i class="fa fa-plus"/> '.__('Add More Image', 'wp-crowdfunding'),
                    'class'     => '',
                    'value'     => '',
                    'is_media'  => true,
                    'multiple'  => true,
                    'required'  => true,
                    'show'      => true
                ),
                'goal' => array(
                    'type'      => 'range',
                    'title'     => __("Funding Goals *", "wp-crowdfunding"),
                    'desc'      => __("Lorem ipsum dolor sit amet, consectetur adipiscing", "wp-crowdfunding"),
                    'class'     => '',
                    'value'     => 30000,
                    'minVal'    => 1,
                    'maxVal'    => 5000000,
                    'required'  => true,
                    'show'      => true,
                ),
                'fund_type' => array(
                    'type'      => 'radio',
                    'title'     => __("Funding Type *","wp-crowdfunding"),
                    'desc'      => __("Lorem ipsum dolor sit amet, consectetur adipiscing","wp-crowdfunding"),
                    'class'     => '',
                    'value'     => '',
                    'options'   => array(
                        array(
                            'value' => 'fixed_funding',
                            'label' => __("Fixed Funding", "wp-crowdfunding"),
                            'desc'  => __("Accept All or Nothing", "wp-crowdfunding"),
                            'class' => '',
                        ),
                        array(
                            'value' => 'flexible_funding',
                            'label' => __("Flexible Funding", "wp-crowdfunding"),
                            'desc'  => __("Accept if doesnot meet goal", "wp-crowdfunding"),
                            'class' => '',
                        )
                    ),
                    'required'  => true,
                    'show'      => true,
                ),
                'goal_type' => array(
                    'type'      => 'radio',
                    'title'     => __("Goal Type *","wp-crowdfunding"),
                    'desc'      => __("Lorem ipsum dolor sit amet, consectetur adipiscing","wp-crowdfunding"),
                    'class'     => '',
                    'value'     => '',
                    'options'   => array(
                        array(
                            'value' => 'target_goal',
                            'label' => __("Target Goal", "wp-crowdfunding"),
                            'desc'  => __("", "wp-crowdfunding"),
                            'class' => '',
                        ),
                        array(
                            'value' => 'target_date',
                            'label' => __("Target Date", "wp-crowdfunding"),
                            'desc'  => __("", "wp-crowdfunding"),
                            'class' => '',
                        ),
                        array(
                            'value' => 'never_end',
                            'label' => __("Campaign Never End", "wp-crowdfunding"),
                            'desc'  => __("", "wp-crowdfunding"),
                            'class' => '',
                        )
                    ),
                    'required'  => false,
                    'show'      => true,
                ),
                'if_target_date' => array(
                    'type'          => 'form_group',
                    'title'         => __("Specific Date & Time", "wp-crowdfunding"),
                    'desc'          => __("Max Campaign Duration 60 Days", "wp-crowdfunding"),
                    'class'         => '',
                    'fields' => array(
                        'start_date' => array(
                            'type'          => 'date',
                            'placeholder'   => __("-form-", "wp-crowdfunding"),
                            'class'         => 'col-md-6',
                            'value'         => '',
                            'required'      => true
                        ),
                        'end_date' => array(
                            'type'          => 'date',
                            'placeholder'   => __("-to-", "wp-crowdfunding"),
                            'class'         => 'col-md-6',
                            'value'         => '',
                            'required'      => true
                        )
                    ),
                    'show' => false,
                ),
                'amount_range' => array(
                    'type'      => 'range',
                    'title'     => __("Amount Range *","wp-crowdfunding"),
                    'desc'      => __("You can Fixed a Maximum and Minimum Amount", "wp-crowdfunding"),
                    'class'     => '',
                    'value'     => '',
                    'minVal'    => 1,
                    'maxVal'    => 5000000,
                    'required'  => true,
                    'show'      => true,
                ),
                'recommended' => array(
                    'type'      => 'text',
                    'title'     => __("Recommended Amount *","wp-crowdfunding"),
                    'desc'      => __("You can Fixed a Maximum Amount","wp-crowdfunding"),
                    'class'     => '',
                    'value'     => '',
                    'required'  => true,
                    'show'      => true,
                ),
            ),
            // Contributor
            'contributor' => array(
                'table' => array(
                    'type'      => 'checkbox',
                    'title'     => __("Contributor Table", "wp-crowdfunding"),
                    'desc'      => __("You can make contributors table", "wp-crowdfunding"),
                    'class'     => '',
                    'value'     => '',
                    'options'   => array(
                        array(
                            'value' => 1,
                            'label' => __("Show contributor table on campaign single page", "wp-crowdfunding"),
                            'class' => '',
                        )
                    ),
                    'required'  => false,
                    'show'      => true,
                ),
                'anonymity' => array(
                    'type'      => 'checkbox',
                    'title'     => __("Contributor Anonymity", "wp-crowdfunding"),
                    'desc'      => __("You can make contributors anonymus visitors will not see the backers", "wp-crowdfunding"),
                    'class'     => '',
                    'value'     => '',
                    'options'   => array(
                        array(
                            'value' => 1,
                            'label' => __("Make contributors anonymous on the contributor table", "wp-crowdfunding"),
                        )
                    ),
                    'required' => false,
                    'show' => true,
                ),
            )
        );

        foreach($fields as $key => $field) {
            if( isset($default_fields[$key]) ) {
                $default_fields[$key] = array_merge($default_fields[$key], $field);
            } else {
                $default_fields[$key] = $field;
            }
        }

        return $default_fields;
    }


    /**
     * Get campaign form story tools
     * @since     2.1.0
     * @access    public
     * @return    [array]   mixed
     */
    function get_form_story_tools() {
        $response = apply_filters( 'wpcf_form_story_tools', [] );
        return rest_ensure_response( $response );
    }


    /**
     * Default team fields
     * @since     2.1.0
     * @access    public
     * @param     {array}   fields
     * @return    [array]   mixed
     */
    function form_story_tools($tools = []) {
        $default_tools = array(
            'image' => array(
                'name'  => __("Image", "wp-crowdfunding"),
                'icon'  => '',
                'show'  => true
            ),
            'video' => array(
                'name'  => __("Video", "wp-crowdfunding"),
                'icon'  => '',
                'show'  => true
            ),
            'embeded' => array(
                'name'  => __("Embeded File", "wp-crowdfunding"),
                'icon'  => '',
                'show'  => true
            ),
            'text' => array(
                'name'  => __("Text", "wp-crowdfunding"),
                'icon'  => '',
                'show'  => true
            ),
            'text_image' => array(
                'name'  => __("Text + Image", "wp-crowdfunding"),
                'icon'  => '',
                'show'  => true
            ),
            'image_image' => array(
                'name'  => __("Image + Image", "wp-crowdfunding"),
                'icon'  => '',
                'show'  => true
            ),
            'text_text' => array(
                'name'  => __("Text + Text", "wp-crowdfunding"),
                'icon'  => '',
                'show'  => true
            ),
            'text_video' => array(
                'name'  => __("Text + Video", "wp-crowdfunding"),
                'icon'  => '',
                'show'  => true
            ),
        );
        return array_merge($default_tools, $tools);
    }


    /**
     * Get campaign form tags
     * @since     2.1.0
     * @access    public
     * @param     {array}   attr
     * @return    [array]   mixed
     */
    function get_form_tags() {
        $data = array();
        $arg = array(
            'post_type' => 'product',
            'tax_query' 		=> array(
                array(
                    'taxonomy'  => 'product_type',
                    'field'     => 'slug',
                    'terms'     => 'crowdfunding',
                ),
                /* array(
                    'taxonomy' => 'product_cat',
                    'field'    => 'slug',
                    'terms'    => array( esc_attr($_GET['cat']) ),
                ), */
            ),
            'post_status'=> 'publish'
        );
        $uniqeTags = [];
        $query = new \WP_Query( $arg );
        while ( $query->have_posts() ) {
            $query->the_post();
            $posttags = get_the_terms( get_the_ID(), 'product_tag' );
            if ($posttags) {
                foreach($posttags as $tag) {
                    if( !in_array($tag->slug, $uniqeTags) ) {
                        $data[] = array(
                            'value' => $tag->slug,
                            'label' => $tag->name
                        );
                        $uniqeTags[] = $tag->slug;
                    }
                }
            }
        }

        return $data;
    }


    /**
     * Get states from country code
     * @since     2.1.0
     * @access    public
     * @return    [array]   mixed
     */
    function get_states() {
        $code = $_GET['code'];
        $country = new \WC_Countries();
        $states = $country->get_states($code);
        $options = array();
        if($states) {
            foreach($states as $key => $state) {
                $options[] = array(
                    'value' => $key,
                    'label' => $state
                );
            }
        }
        $response = array(
            'section' => 'campaign_info',
            'field' => 'state',
            'options' => $options,
        );
        return rest_ensure_response( $response );
    }


    /**
     * Get Sub categories from main category
     * @since     2.1.0
     * @access    public
     * @return    [array]   mixed
     */
    function sub_categories() {
        $id = $_GET['id'];
        $options = $this->get_subcategories($id);
        $response = array(
            'section' => 'campaign_info',
            'field' => 'sub_category',
            'options' => $options,
        );
        return rest_ensure_response( $response );
    }


    /**
     * Get Sub categories from main category
     * @since     2.1.0
     * @access    public
     * @return    [array]   mixed
     */
    function get_subcategories($id) {
        $cat_args = array(
            'taxonomy'      => 'product_cat',
            'hide_empty'    => false,
            'parent'        => $id
        );
        //Get is Crowdfunding Categories only
        $is_only_crowdfunding_categories = get_option('seperate_crowdfunding_categories');
        if ('true' === $is_only_crowdfunding_categories){
            $cat_args['meta_query'] = array(
                array(
                    'key' => '_marked_as_crowdfunding',
                    'value' => '1'
                )
            );
        }
        $data = array();
        $categories = get_terms($cat_args);
        foreach($categories as $category) {
            $data[] = array(
                'label' => $category->name,
                'value' => $category->term_id
            ); 
        }
        return $data;
    }

    /**
     * Default form reward types
     * @since     2.1.0
     * @access    public
     * @param     {array}   fields
     * @return    [array]   mixed
     */
    function form_reward_types($fields = []) {
        
        $default_fields = array(
            array(
                'title'     => __("Giving Thanks", "wp-crowdfunding"),
                'icon'      => '',
                'show'      => true
            ),
            array(
                'title'     => __("Digital Goods", "wp-crowdfunding"),
                'icon'      => '',
                'show'      => true
            ),
            array(
                'title'     => __("Physical Goods", "wp-crowdfunding"),
                'icon'      => '',
                'show'      => true
            )
        );

        return array_merge($default_fields, $fields);
    }


    /**
     * Get campaign form fields
     * @since     2.1.0
     * @access    public
     * @return    [array]   mixed
     */
    function get_form_reward_fields() {
        $response = array(
            'types' => apply_filters( 'wpcf_form_reward_types', [] ),
            'fields' => apply_filters( 'wpcf_form_reward_fields', [] )
        );
        return rest_ensure_response( $response );
    }


    /**
     * Default reward fields
     * @since     2.1.0
     * @access    public
     * @param     {array}   fields
     * @return    [array]   mixed
     */
    function form_reward_fields($fields = []) {

        $month_list = array(
            array( 'value' => 'jan', 'label' => __('January', "wp-crowdfunding") ),
            array( 'value' => 'feb', 'label' => __('February', "wp-crowdfunding") ),
            array( 'value' => 'mar', 'label' => __('March', "wp-crowdfunding") ),
            array( 'value' => 'apr', 'label' => __('April', "wp-crowdfunding") ),
            array( 'value' => 'may', 'label' => __('May', "wp-crowdfunding") ),
            array( 'value' => 'jun', 'label' => __('June', "wp-crowdfunding") ),
            array( 'value' => 'jul', 'label' => __('July', "wp-crowdfunding") ),
            array( 'value' => 'aug', 'label' => __('August', "wp-crowdfunding") ),
            array( 'value' => 'sep', 'label' => __('September', "wp-crowdfunding") ),
            array( 'value' => 'oct', 'label' => __('October', "wp-crowdfunding") ),
            array( 'value' => 'nov', 'label' => __('November', "wp-crowdfunding") ),
            array( 'value' => 'dec', 'label' => __('December', "wp-crowdfunding") ),
        );

        $year_list = array();
        foreach( range(date('Y'), date('Y')+10) as $year ) {
            $year_list[] = array( 'value' => $year, 'label' => __($year, "wp-crowdfunding") );
        }
        
        
        $default_fields = array(
            'title' => array(
                'type'          => 'text',
                'title'         => __("Title *", "wp-crowdfunding"),
                'desc'          => __("Briefly describe this reward.", "wp-crowdfunding"),
                'placeholder'   => __("", "wp-crowdfunding"),
                'class'         => '',
                'value'         => '',
                'required'      => true,
                'show'          => true
            ),
            'amount' => array(
                'type'          => 'text',
                'title'         => __("Pledge Amount *", "wp-crowdfunding"),
                'desc'          => __("Briefly describe this reward.", "wp-crowdfunding"),
                'placeholder'   => __("", "wp-crowdfunding"),
                'class'         => '',
                'value'         => '',
                'required'      => true,
                'show'          => true
            ),
            'image' => array(
                'type'      => 'image',
                'title'     => __("Rewards Image *","wp-crowdfunding"),
                'desc'      => __("Dimention Should be 560x340px ; Max Size : 5MB","wp-crowdfunding"),
                'button'    => '<i class="fa fa-plus"/> '.__('Add Image', 'wp-crowdfunding'),
                'class'     => '',
                'value'     => '',
                'multiple'  => false,
                'required'  => true,
                'show'      => true
            ),
            'description' => array(
                'type'          => 'textarea',
                'title'         => __("Rewards Description *", "wp-crowdfunding"),
                'desc'          => __("Keep It Short. Just Small Brief About your Project", "wp-crowdfunding"),
                'placeholder'   => __("", "wp-crowdfunding"),
                'class'         => '',
                'value'         => '',
                'required'      => true,
                'show'          => true,
            ),
            'estimate_delivery' => array(
                'type'          => 'form_group',
                'title'         => __("Estimate Delivery *", "wp-crowdfunding"),
                'desc'          => __("Reach a more specific community by also choosing a subcategory", "wp-crowdfunding"),
                'class'         => '',
                'fields' => array(
                    'end_month' => array(
                        'type'          => 'select',
                        'placeholder'   => __("Select Sub-Catagory", "wp-crowdfunding"),
                        'class'         => 'col-md-7',
                        'value'         => '',
                        'options'       => $month_list,
                        'required'      => true,
                        'show'          => true
                    ),
                    'end_year' => array(
                        'type'          => 'select',
                        'placeholder'   => __("Select Sub-Catagory", "wp-crowdfunding"),
                        'class'         => 'col-md-5',
                        'value'         => '',
                        'options'       => $year_list,
                        'required'      => true,
                        'show'          => true
                    )
                )
            ),
            'rewards_items' => array(
                'type'      => 'repeatable',
                'title'     => __("Rewards Item *", "wp-crowdfunding"),
                'desc'      => __("Be Specific About What are Included in the Perks", "wp-crowdfunding"),
                'button'    => '<i class="fa fa-plus"/> '.__('Add More Item', 'wp-crowdfunding'),
                'class'     => '',
                'fields'    => array(
                    'name' => array(
                        'type'          => 'text',
                        'placeholder'   => __("", "wp-crowdfunding"),
                        'class'         => '',
                        'required'      => true,
                        'show'          => true,
                    ),
                ),
                'value'     => '',
                'open_first_item' => true,
                'required'  => false,
                'show'      => true,
            ),
            'no_of_items' => array(
                'type'          => 'text',
                'title'         => __("Total Number of Rewards *", "wp-crowdfunding"),
                'desc'          => __("", "wp-crowdfunding"),
                'placeholder'   => __("", "wp-crowdfunding"),
                'class'         => '',
                'value'         => '',
                'required'      => true,
                'show'          => true
            ),
        );

        return array_merge($default_fields, $fields);
    }


    /**
     * Get campaign team fields
     * @since     2.1.0
     * @access    public
     * @return    [array]   mixed
     */
    function get_form_team_fields() {
        $response = apply_filters( 'wpcf_form_team_fields', [] );
        return rest_ensure_response( $response );
    }


    /**
     * Default team fields
     * @since     2.1.0
     * @access    public
     * @param     {array}   fields
     * @return    [array]   mixed
     */
    function form_team_fields($fields = []) {
        $default_fields = array(
            'email' => array(
                'type'          => 'email',
                'title'         => __("Email *", "wp-crowdfunding"),
                'desc'          => __("", "wp-crowdfunding"),
                'placeholder'   => __("", "wp-crowdfunding"),
                'class'         => '',
                'value'         => '',
                'required'      => true,
                'show'          => true
            ),
            'name' => array(
                'type'          => 'text',
                'title'         => __("Collaborator Name", "wp-crowdfunding"),
                'desc'          => __("", "wp-crowdfunding"),
                'placeholder'   => __("", "wp-crowdfunding"),
                'class'         => '',
                'value'         => '',
                'required'      => false,
                'show'          => true
            ),
            'manage_campaign' => array(
                'type'      => 'checkbox',
                'title'     => __("If you Want to Show Contributor List", "wp-crowdfunding"),
                'desc'      => __("", "wp-crowdfunding"),
                'class'     => '',
                'value'     => '',
                'options'   => array(
                    array(
                        'value' => 1,
                        'label' => __("Give Permission to Manage Campaign", "wp-crowdfunding"),
                        'class' => '',
                    )
                ),
                'required'  => false,
                'show'      => true,
            ),
            'edit_campaign' => array(
                'type'      => 'checkbox',
                'title'     => __("If you Want to Show Contributor List", "wp-crowdfunding"),
                'desc'      => __("", "wp-crowdfunding"),
                'class'     => '',
                'value'     => '',
                'options'   => array(
                    array(
                        'value' => 1,
                        'label' => __("Give Permission to Edit Campaign", "wp-crowdfunding"),
                        'class' => '',
                    )
                ),
                'required'  => false,
                'show'      => true,
            ),
        );

        return array_merge($default_fields, $fields);
    }


    /**
     * Save campagin data
     * @since     2.1.0
     * @access    public
     * @param     {object}  request
     * @return    [array]   mixed
     */
    function save_campaign( \WP_REST_Request $request ) {
        $json_params = $request->get_json_params();
        echo "<pre>";
        print_r($json_params);



        $user_id = $this->current_user_id;
        $campaign = array(
            'post_type'		=>'product',
            'post_title'    => $title,
            'post_content'  => $description,
            'post_excerpt'  => $short_description,
            'post_author'   => $user_id,
        );
        
        do_action('wpcf_before_campaign_submit_action');

        return rest_ensure_response(array(
            'success'   => 0,
            'msg'       => __('Amount must be greater than 0', 'wp-crowdfunding-pro')
        ));
    }

}

new API_Campaign();





/*
[basic] => Array
    (
        [media] => Array
            (
                [0] => Array
                    (
                        [id] => jdvdkGwodAY
                        [type] => video_link
                        [src] => https://youtu.be/jdvdkGwodAY
                        [thumb] => https://img.youtube.com/vi/jdvdkGwodAY/default.jpg
                    )

                [1] => Array
                    (
                        [id] => 20
                        [type] => image
                        [src] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/Image-from-iOS-1.jpg
                        [name] => Image-from-iOS-1.jpg
                        [mime] => image/jpeg
                        [thumb] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/Image-from-iOS-1-150x150.jpg
                    )

                [2] => Array
                    (
                        [id] => 19
                        [type] => image
                        [src] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/61430404_2177917752277288_5112094423315906560_o-1.jpg
                        [name] => 61430404_2177917752277288_5112094423315906560_o-1.jpg
                        [mime] => image/jpeg
                        [thumb] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/61430404_2177917752277288_5112094423315906560_o-1-150x150.jpg
                    )

            )

        [goal] => 33307
        [amount_range] => Array
            (
                [min] => 1
                [max] => 5000000
            )

        [video_link] => Array
            (
                [0] => Array
                    (
                        [src] => https://youtu.be/jdvdkGwodAY
                    )

            )

        [category] => 20
        [types] => individual
        [sub_category] => 23
        [country] => BD
        [state] => BD-14
        [title] => Campaign Title
        [subtitle] => Campaign Sub-Title
        [short_desc] => Campaign Description
        [tags] => Array
            (
                [0] => Array
                    (
                        [value] => tag1
                        [label] => Tag1
                    )

                [1] => Array
                    (
                        [value] => tag2
                        [label] => Tag2
                    )

            )

        [image] => Array
            (
                [0] => Array
                    (
                        [id] => 20
                        [type] => image
                        [src] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/Image-from-iOS-1.jpg
                        [name] => Image-from-iOS-1.jpg
                        [mime] => image/jpeg
                        [thumb] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/Image-from-iOS-1-150x150.jpg
                    )

                [1] => Array
                    (
                        [id] => 19
                        [type] => image
                        [src] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/61430404_2177917752277288_5112094423315906560_o-1.jpg
                        [name] => 61430404_2177917752277288_5112094423315906560_o-1.jpg
                        [mime] => image/jpeg
                        [thumb] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/61430404_2177917752277288_5112094423315906560_o-1-150x150.jpg
                    )

            )

        [fund_type] => fixed_funding
        [goal_type] => target_date
        [start_date] => 2019-10-25
        [end_date] => 2019-11-22
        [recommended] => 1000
        [table] => 1
        [anonymity] => 1
    )

[story] => Array
    (
        [0] => Array
            (
                [0] => Array
                    (
                        [type] => text
                        [value] => <h1 style="text-align: center;">Campaign</h1>
<p style="text-align: center;">Paragraph text...</p>
                    )

            )

        [1] => Array
            (
                [0] => Array
                    (
                        [type] => image
                        [value] => Array
                            (
                                [0] => Array
                                    (
                                        [id] => 129
                                        [type] => image
                                        [src] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/08/46492082_2271536482916815_6132729797039620096_o.jpg
                                        [name] => 46492082_2271536482916815_6132729797039620096_o.jpg
                                        [mime] => image/jpeg
                                        [thumb] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/08/46492082_2271536482916815_6132729797039620096_o-150x150.jpg
                                    )

                            )

                    )

            )

    )

[rewards] => Array
    (
        [0] => Array
            (
                [type] => 0
                [rewards_items] => Array
                    (
                        [0] => Array
                            (
                                [name] => item
                            )

                    )

                [title] => Reward title
                [amount] => hello
                [image] => Array
                    (
                        [0] => Array
                            (
                                [id] => 19
                                [type] => image
                                [src] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/61430404_2177917752277288_5112094423315906560_o-1.jpg
                                [name] => 61430404_2177917752277288_5112094423315906560_o-1.jpg
                                [mime] => image/jpeg
                                [thumb] => http://10.0.1.47:8888/wordpress/wp-content/uploads/2019/07/61430404_2177917752277288_5112094423315906560_o-1-150x150.jpg
                            )

                    )

                [description] => hello
                [end_month] => jan
                [end_year] => 2019
                [no_of_items] => 3
            )

    )

[team] => Array
    (
    )

[submit] => 

*/