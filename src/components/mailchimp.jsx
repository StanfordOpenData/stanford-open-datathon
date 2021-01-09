import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SignupForm = () => {
  return (
    <div id="mc_embed_signup">
      <form action="https://gmail.us7.list-manage.com/subscribe/post?u=aa06addd883735d25eed227d1&amp;id=5db13744de" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
          </div>
          <div class="mc-field-group">
            <label for="mce-ORIGIN">How did you hear about us?  <span class="asterisk">*</span></label>
            <select name="ORIGIN" class="required" id="mce-ORIGIN">
              <option value=""></option>
              <option value="School Email">School Email</option>
              <option value="Social Media">Social Media</option>
              <option value="Word of mouth">Word of mouth</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="mc-field-group">
            <label for="mce-SCHOOL">School (If appplicable) </label>
            <input type="text" value="" name="SCHOOL" class="" id="mce-SCHOOL"/>
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div class="response" id="mce-success-response" style= {{ display: 'none' }}></div>
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_aa06addd883735d25eed227d1_5db13744de" tabindex="-1" value=""/></div>
          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
        </div>
      </form>
    </div>
  )
}

function Mailchimp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Subscribe for Updates
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignupForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Mailchimp