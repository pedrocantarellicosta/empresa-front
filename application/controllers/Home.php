<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    public function __contruct(){
        parent::__contruct();
    }

	public function index()
	{

        $this->load->view('html-header');

        $this->load->view('home/header');
        $this->load->view('home/sobre');
        $this->load->view('home/facebook');
        $this->load->view('home/fale-conosco.php');
        $this->load->view('home/footer');
        
        $this->load->view('html-footer');
    }
}
