import { Button, OverlayTrigger, Tooltip, Col } from 'react-bootstrap';

const DownloadLink = ({ link, text }) => {

  return (
    <Col className="m-1">
      <OverlayTrigger
        placement='top'
        overlay={<Tooltip>{link.substr(link.lastIndexOf('.') + 1)}</Tooltip>}
      >
        <Button href={link} variant="outline-dark">{text}</Button>
      </OverlayTrigger >
    </Col>
  )
}

export default DownloadLink;