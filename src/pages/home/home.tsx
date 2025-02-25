import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HyperDatepicker } from 'components';
import { useDatePicker } from 'hooks';
import RevenueChart from './RevenueChart';
import RevenueByLocationChart from './RevenueByLocationChart';
import SalesChart from './SalesChart';
import Products from './Products';

export default function Home(){
    const { selectedDate, onDateChange } = useDatePicker();
    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <form className="d-flex">
                                <div className="input-group">
                                    <HyperDatepicker
                                        value={selectedDate}
                                        inputClass="form-control-light"
                                        onChange={(date) => {
                                            onDateChange(date);
                                        }}
                                    />
                                </div>
                                <Link to="#" className="btn btn-primary ms-2">
                                    <i className="mdi mdi-autorenew"></i>
                                </Link>
                                <Link to="#" className="btn btn-primary ms-1">
                                    <i className="mdi mdi-filter-variant"></i>
                                </Link>
                            </form>
                        </div>
                        <h4 className="page-title">Home</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={8}>
                    <RevenueChart />
                </Col>
                <Col lg={4}>
                    <RevenueByLocationChart />
                </Col>
            </Row>

            <Row>
                <Col xl={{ span: 6, order: 1 }} lg={{ span: 12, order: 2 }}>
                    <Products />
                </Col>
                <Col xl={3} lg={{ span: 6, order: 1 }}>
                    <SalesChart />
                </Col>
            </Row>
        </>
    )
}